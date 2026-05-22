function processInline(text: string): string {
  let s = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(
    /\[([^\]]+)]\(([^)]+)\)/g,
    '<a href="$2" class="text-indigo-600 font-semibold underline-offset-2 hover:underline">$1</a>'
  );
  return s;
}

function parseTable(lines: string[], startIdx: number): { html: string; nextIdx: number } {
  const rowLines: string[] = [];
  let i = startIdx;
  while (i < lines.length && lines[i].trim().includes('|')) {
    rowLines.push(lines[i].trim());
    i++;
  }
  if (rowLines.length < 2) return { html: '', nextIdx: startIdx + 1 };

  const splitRow = (row: string) =>
    row
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map((c) => c.trim());

  const headerCells = splitRow(rowLines[0]);
  const bodyRows = rowLines
    .slice(2)
    .map(splitRow)
    .filter((r) => r.length > 0);

  let html =
    '<div class="overflow-x-auto my-6"><table class="min-w-full text-sm border border-slate-200 rounded-xl overflow-hidden">';
  html += '<thead class="bg-slate-100"><tr>';
  for (const h of headerCells) {
    html += `<th class="text-left px-4 py-3 font-bold text-slate-800 border-b border-slate-200">${processInline(h)}</th>`;
  }
  html += '</tr></thead><tbody>';
  for (const row of bodyRows) {
    html += '<tr class="border-b border-slate-100 last:border-0 bg-white">';
    for (let c = 0; c < row.length; c++) {
      html += `<td class="px-4 py-2.5 text-slate-700">${processInline(row[c])}</td>`;
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';
  return { html, nextIdx: i };
}

export function markdownToHtml(md: string): string {
  const raw = md.replace(/\r\n/g, '\n').trim();
  const lines = raw.split('\n');
  const blocks: string[] = [];
  let i = 0;

  const flushParagraph = (acc: string[]) => {
    if (acc.length === 0) return;
    const joined = acc.join(' ').trim();
    if (joined)
      blocks.push(`<p class="text-slate-700 leading-relaxed my-4">${processInline(joined)}</p>`);
    acc.length = 0;
  };

  const paraAcc: string[] = [];

  while (i < lines.length) {
    const line = lines[i];
    const t = line.trim();

    if (t === '') {
      flushParagraph(paraAcc);
      i++;
      continue;
    }

    if (t === '---') {
      flushParagraph(paraAcc);
      blocks.push('<hr class="my-10 border-slate-200" />');
      i++;
      continue;
    }

    if (t.startsWith('## ') && !t.startsWith('###')) {
      flushParagraph(paraAcc);
      blocks.push(
        `<h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mt-10 mb-4 scroll-mt-28">${processInline(t.slice(3))}</h2>`
      );
      i++;
      continue;
    }

    if (t.startsWith('### ')) {
      flushParagraph(paraAcc);
      blocks.push(
        `<h3 class="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-28">${processInline(t.slice(4))}</h3>`
      );
      i++;
      continue;
    }

    const nextLine = lines[i + 1]?.trim() ?? '';
    if (t.includes('|') && /^\|[\s\-:|]+\|$/.test(nextLine)) {
      flushParagraph(paraAcc);
      const { html, nextIdx } = parseTable(lines, i);
      blocks.push(html);
      i = nextIdx;
      continue;
    }

    paraAcc.push(t);
    i++;
  }
  flushParagraph(paraAcc);

  return blocks.join('\n');
}

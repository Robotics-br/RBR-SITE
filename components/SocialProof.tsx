import React from 'react';

const SocialProof: React.FC = () => {
  // Placeholder logic for logos
  const LogoPlaceholder = ({ label }: { label: string }) => (
    <div className="h-8 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity duration-300">
       <span className="text-xl font-bold text-slate-800 font-sans tracking-tight">{label}</span>
    </div>
  );

  return (
    <section className="py-10 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">
          A base de crescimento para visionários modernos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            <LogoPlaceholder label="ACME Corp" />
            <LogoPlaceholder label="StarkInd" />
            <LogoPlaceholder label="WayneEnt" />
            <LogoPlaceholder label="Cyberdyne" />
            <LogoPlaceholder label="Massive" />
            <LogoPlaceholder label="Global" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
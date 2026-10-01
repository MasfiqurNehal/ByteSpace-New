import * as React from "react";

export function PartnersBar() {
  const partners = [
    { name: "Google", domain: "Cloud & AI" },
    { name: "Microsoft", domain: "Enterprise Tech" },
    { name: "Amazon", domain: "AWS Cloud" },
    { name: "Spotify", domain: "Audio Engineering" },
    { name: "Slack", domain: "Productivity" },
    { name: "Figma", domain: "Design Systems" },
  ];

  return (
    <section className="w-full bg-[#F5F5F6] border-y border-slate-200/80 py-10 sm:py-12">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 text-center">
            Trusted by learners & engineering teams at top companies worldwide
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/80 transition-all group"
              >
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-700 group-hover:text-[#003BE2] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
                  {partner.domain}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

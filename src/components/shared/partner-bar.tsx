import Image from "next/image";

const PARTNERS = [
  { name: "Google", logo: "/images/hero/partner-logos.png" },
];

export function PartnerBar() {
  return (
    <section className="w-full bg-[#F5F5F6] py-12 sm:py-16 border-y border-black/5">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center overflow-hidden">
          <Image
            src="/images/hero/partner-logos.png"
            alt="ByteSpace Trusted Partners and Educational Collaborators"
            width={1132}
            height={42}
            className="w-full max-w-[1000px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
      </div>
    </section>
  );
}

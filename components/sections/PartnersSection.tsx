export default function PartnersSection() {
  const partners = [
    "/assets/partners/partner-airf.jpg",
    "/assets/partners/partner-ewod.jpg",
    "/assets/partners/partner-forestcover.jpg",
    "/assets/partners/partner-lld.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-sm uppercase tracking-wide text-gray-500">
          Trusted by partners & organizations
        </h3>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {partners.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={logo}
                alt="partner"
                className="h-16 object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function TrustSection() {
  const partnerLogos = [
    { name: "AIRF", logo: "/assets/partners/airf.png" },
    { name: "EWOD PGM", logo: "/assets/partners/ewod.png" },
    { name: "Forest Cover", logo: "/assets/partners/forestcover.png" },
    { name: "LLD Fampandrosoana Ifotony", logo: "/assets/partners/lld.png" },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">

        <div className="text-center mb-12">
          <h2>Trusted Partners</h2>
          <p className="mt-4">
            We collaborate with organizations across climate, finance, and conservation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partnerLogos.map((partner, idx) => (
            <div key={idx} className="flex justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

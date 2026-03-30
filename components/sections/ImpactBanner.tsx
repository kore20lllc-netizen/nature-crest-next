export default function ImpactBanner() {
  return (
    <section className="bg-gray-50 py-12 border-y">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 text-center gap-6">

        <div>
          <div className="text-3xl font-bold text-green-600">50+</div>
          <p className="text-sm text-gray-500 mt-2">Projects Delivered</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-green-600">30+</div>
          <p className="text-sm text-gray-500 mt-2">Countries Covered</p>
        </div>

        <div>
          <div className="text-3xl font-bold text-green-600">100M+</div>
          <p className="text-sm text-gray-500 mt-2">tCO₂ Managed</p>
        </div>

      </div>
    </section>
  );
}

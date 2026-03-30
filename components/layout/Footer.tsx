export default function Footer() {
  return (
    <footer className="bg-[#0B0F0E] text-white mt-20">

      {/* Trust strip */}
      <div className="border-b border-white/10">
        <div className="container py-10 text-center">
          <p className="text-sm text-gray-400 mb-4">
            Trusted by partners across Africa and global climate networks
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <span>Climate Finance</span>
            <span>Carbon Markets</span>
            <span>Nature-Based Solutions</span>
            <span>Policy & Strategy</span>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12 grid md:grid-cols-4 gap-10 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Nature Crest</h3>
          <p className="text-gray-400">
            Building scalable climate and nature solutions across Africa.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#insights" className="hover:text-white">Insights</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Partnerships</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400">
            contact@naturecrest.com
          </p>
          <p className="text-gray-400 mt-2">
            Global · Africa Focus
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container py-6 text-xs text-gray-500 flex justify-between">
          <span>© {new Date().getFullYear()} Nature Crest</span>
          <span>All rights reserved</span>
        </div>
      </div>

    </footer>
  );
}

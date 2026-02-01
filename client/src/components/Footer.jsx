import { assets } from "../assets/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-20">
      {/* Top Section */}
      <div className="container px-4 2xl:px-20 mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Company Info */}
        <div className="col-span-1 lg:col-span-2">
          <img src={assets.logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-sm text-gray-600 leading-relaxed">
            Client-Pradeep is a modern job portal helping students, freshers,
            and professionals connect with top companies.  
            Simple, fast, and trusted by users.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:scale-110 transition">
              <img src={assets.facebook_icon} alt="Facebook" className="w-9" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <img src={assets.twitter_icon} alt="Twitter" className="w-9" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <img src={assets.instagram_icon} alt="Instagram" className="w-9" />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Find Jobs</li>
            <li className="hover:text-black cursor-pointer">Companies</li>
            <li className="hover:text-black cursor-pointer">Post a Job</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Career Tips</li>
            <li className="hover:text-black cursor-pointer">Resume Guide</li>
            <li className="hover:text-black cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Help Center</li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
            <li className="hover:text-black cursor-pointer">Report Issue</li>
            <li className="hover:text-black cursor-pointer">Feedback</li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t">
        <div className="container px-4 2xl:px-20 mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Subscribe to get job updates and career tips.
          </p>

          <div className="flex w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 rounded-l-md w-full sm:w-64 outline-none"
            />
            <button className="bg-black text-white px-5 py-2 rounded-r-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100">
        <div className="container px-4 2xl:px-20 mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {year} client-pradeep.dev. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-black cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-black cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-black cursor-pointer">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

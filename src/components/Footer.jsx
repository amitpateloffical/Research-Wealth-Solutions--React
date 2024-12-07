import { Link } from "react-router-dom"; // Only import Link from react-router-dom
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

// Footer Component
export default function Footer() {
  return (
    <footer className="bg-slate-200 pt-10">
      <div className="max-w-7xl mx-auto px-6 font-medium">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-8">
          {/* About Company Section */}
          <div className="lg:col-span-2 flex flex-col items-start mb-6 lg:mb-0">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="max-w-36 h-auto mb-3"
            />
            <p className="text-justify text-sm sm:text-base">
              Research Wealth Solutions, led by our founder and Chief Analyst
              Miss Shruti Mishra, Research Analyst service. With her impressive
              academic background of B.Com and M.Com and her exceptional
              expertise in the Indian Financial Market, Sanchi has been
              passionately studying and analyzing the market for over a decade.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2 flex flex-col text-justify mb-6 lg:mb-0">
            <div className="text-xl uppercase font-bold mb-4 text-customTheme-theme1">
              Quick Links
            </div>
            <div className="space-y-2">
              <LinkItem title="Home" link="/" />
              <LinkItem title="About Us" link="/" />
              <LinkItem title="Services" link="/" />
              <LinkItem title="Products" link="/" />
              <LinkItem title="Intraday Calls" link="/" />
              <LinkItem title="Our Branches" link="/" />
              <LinkItem title="Contact Us" link="/" />
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3 flex flex-col items-start">
            <div className="text-xl uppercase font-bold mb-4 text-customTheme-theme1">
              Contact
            </div>
            <div className="space-y-3">
              <a href="#" target="_blank" className="flex gap-3 items-center">
                <GrLocation className="text-3xl font-semibold" />
                SCO 150 & 55, Bridge Market, 17C, Sector 17, Chandigarh, 160017.
              </a>
              <a
                className="flex gap-3 items-center pl-2"
                href={`tel:+910000000000`}
              >
                <FaPhoneAlt className="text-xl font-semibold" />
                +91 7693898747
              </a>
              <a
                className="flex gap-3 items-center pl-2 pb-2"
                href={`mailto:info@example.com`}
              >
                <IoMail className="text-2xl font-semibold" />
                info@researchwealthsolutions.com
              </a>

              {/* Social Icons */}
              <div className="flex gap-3 items-center mt-4">
                <a
                  href="#"
                  target="_blank"
                  className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"
                >
                  <FaSquareXTwitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright bg-customTheme-theme1 p-2 text-white text-center rounded-t-xl mt-6">
          © 2024 Research Wealth Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

// LinkItem Component (No longer imported from react-router-dom)
const LinkItem = ({ title, link }) => (
  <Link to={link} className="flex gap-3 items-center text-sm sm:text-base hover:text-customTheme-theme1">
    <span>{title}</span>
  </Link>
);

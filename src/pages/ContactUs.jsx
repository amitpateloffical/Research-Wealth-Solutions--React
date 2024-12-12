import { FaPhoneSquareAlt, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const ContactUs = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const ContactItem = ({ icon, text, link, type }) => (
    <div className="flex items-center gap-3">
      <div className="text-4xl md:text-5xl">{icon}</div> {/* Ensures larger icon size */}
      {type === "link" ? (
        <a
          href={link}
          className="hover:underline text-sm md:text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <button
          onClick={() => handleCopy(text)}
          className="text-sm md:text-base hover:underline focus:outline-none"
        >
          {text}
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-green-500 text-white text-center py-4 shadow-md">
        <h1 className="text-3xl font-extrabold uppercase tracking-wide">
          Contact Us
        </h1>
      </header>

      <div className="flex flex-col items-center justify-center py-8 px-4 bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg w-full max-w-5xl overflow-hidden">
          {/* Left Section */}
          <div className="bg-gradient-to-b from-teal-500 to-teal-700 text-white flex flex-col justify-center p-6 md:w-1/3 hidden md:flex">
            <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-5 text-base">
              <ContactItem
                icon={<FaPhoneSquareAlt className="text-lg" />}
                text="+91 7693898747"
                link="tel:+917693898747"
                type="link"
              />
              <ContactItem
                icon={<FaWhatsappSquare className="text-lg" />}
                text="+91 7693898747"
                link="https://wa.me/917693898747"
                type="link"
              />
              <ContactItem
                icon={<MdEmail className="text-xl" />}
                text="info@researchwealthsolutions.com"
                link="mailto:info@researchwealthsolutions.com"
                type="link"
              />
              <ContactItem
                icon={<IoLocationSharp className="text-2xl" />}
                text="SCO 150 & 55, Bridge Market, 17C, Sector 17, Chandigarh, 160017"
                type="text"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-teal-500"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-teal-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-teal-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-teal-500"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-teal-500"
                  placeholder="Enter your message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-green-500 text-white py-2 rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring focus:ring-teal-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

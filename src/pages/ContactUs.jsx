import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const ContactUs = () => {
  return (
    <>
    {/* Header */}
    <header className="bg-teal-700 text-white text-center py-6 shadow-lg">
        <h1 className="text-3xl font-bold uppercase">Contact Us</h1>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-4xl overflow-hidden">
          {/* Left Section */}
          <div className="bg-teal-600 text-white flex flex-col justify-center p-6 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
            <p className="mb-2 flex items-center gap-2 ">
              <strong><FaPhoneSquareAlt />
              </strong> +91 7693898747
            </p>
           
            <p className="mb-2 flex items-center gap-2">
              <strong><FaWhatsappSquare />
              </strong> +91 7693898747
            </p>
            <p className="mb-2 flex items-center gap-2">
              <strong><MdEmail />
              </strong> info@researchwealthsolutions.com
            </p>
            <p className="flex gap-2">
              <strong><IoLocationSharp className="mt-1" />
              </strong> SCO 150 & 55, Bridge Market, 17C, Sector 17, Chandigarh, 160017
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-600 text-sm mb-1"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-600"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-600 text-sm mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-600"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-600 text-sm mb-1"
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-600"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-600 text-sm mb-1"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-600"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-600 text-sm mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-teal-600"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300"
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

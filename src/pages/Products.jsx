import { Link } from "react-router-dom";
const Products = () => {
return(
    <>
<div className="flex  justify-center min-h-screen bg-gray-100 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-1/2 h-24">
          {/* Card 1 */}
          <Link
            to="/page1"
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300 "
          >
            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="max-w-44 mx-auto mb-4"
            />
            {/* Heading */}
            <h2 className="text-2xl font-bold text-teal-700">
              Bullish India Direct
            </h2>
          </Link>

          {/* Card 2 */}
          <Link
            to="/page2"
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="max-w-44 mx-auto mb-4"
            />
            {/* Heading */}
            <h2 className="text-2xl font-bold text-teal-700 ">
            Bullish India Smallcase
            </h2>
          </Link>
        </div>
      </div>    </>
);
};
export default Products;
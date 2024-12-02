import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <header className="bg-teal-700 text-white text-center py-6 shadow-lg">
        <h1 className="text-3xl font-bold uppercase">Products</h1>
      </header>
      <div className="flex justify-center  bg-gray-100 px-4 pt-8 pb-4">
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w- md:w-1/2 ">
          {/* Card 1 */}
          <Link
            to="/page1"
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
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
            <h2 className="text-2xl font-bold text-teal-700">
              Bullish India Smallcase
            </h2>
          </Link>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex justify-center items-center bg-gray-100 px-6 pt-4 pb-8">
        <div className="w-full md:w-3/4 lg:w-2/3">
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-white rounded-lg border-collapse">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="py-4 px-6 text-lg font-semibold text-left">
                    Products
                  </th>
                  <th className="py-4 px-6 text-lg font-semibold text-left">
                    Bullish India Direct
                  </th>
                  <th className="py-4 px-6 text-lg font-semibold text-left">
                    Bullish India Smallcase
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-6 px-6 text-left font-semibold align-top">
                    Service Type
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    Daily Rocket Calls <br />
                    10 to 15 Days Short-term Calls <br />
                    15+ Multibagger Stocks in a year
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    Portfolios through <br />
                    Smallcase platform
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-6 px-6 text-left font-semibold align-top">
                    Suitable For
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    Active Investors <br />
                    Long-term Investors
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    Passive Investors
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-6 px-6 text-left font-semibold align-top">
                    Required Fund for Portfolio
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    At least 5 Lakhs
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    At least 2 Lakhs
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-6 px-6 text-left font-semibold align-top">
                    Number of Stocks Covered
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    15+ Multibagger Stocks <br />
                    20-25 Short-term Stocks <br />
                    Daily BTST & Rocket Calls
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    8-15 Stocks Portfolio
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-6 px-6 text-left font-semibold align-top">
                    Duration or Idea
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    Short and Long-term Investments <br />
                    BTST Stocks <br />
                    High Risk/Reward Stocks
                  </td>
                  <td className="py-6 px-6 text-left align-top">
                    Short and Long-term Stocks
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

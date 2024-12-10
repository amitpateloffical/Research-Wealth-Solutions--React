const Services = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-teal-600 to-green-500 text-white text-center py-6 shadow-lg">
        <h1 className="text-3xl font-bold uppercase">Services</h1>
      </header>
      <div className="flex  justify-center bg-gray-100 pt-8 pb-4">
        <div className="w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Short Term Trading Advice */}
            <div className="bg-gradient-to-r from-cyan-100 to-teal-600 bg-opacity-90 p-8 rounded-lg shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-700 mb-6">
                Short Term Trading Advice
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Leverage our knowledge to trade with confidence. Expert advice
                for making money with specific targets and strict stoploss.
              </p>
              <ul className="text-gray-00 space-y-4 mb-6">
                <li>
                  <span className="font-semibold">
                    Top 9-10 trading advice/month
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Profit probability 9-10% per trade
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Short term swing trade (1-2 weeks)
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Risk reward ratio from 1:2 to 1:4
                  </span>
                </li>
              </ul>
              <div className="text-gray-800 space-y-4">
                <p className="font-bold text-lg">Pricing</p>
                <div className="space-y-2  ">
                  <div className="flex justify-between">
                    <span>Basic Registration</span>
                    <span className=" text-gray-800 ">₹ 5500</span>
                    <span>6 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Ragistration</span>
                    <span className=" text-gray-800 ">₹ 12500</span>
                    <span>12 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Basic Services</span>
                    <span className=" text-gray-800">₹ 25,000 to 50,000</span>
                    <span>3 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Primium Services</span>
                    <span className=" text-gray-800 ">₹ 1 Lac to 2.10 Lac</span>
                    <span>Return 🠖 4X</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platinum Services</span>
                    <span className=" text-gray-800 ">₹ 2 Lac to 4 Lac</span>
                    <span>Return 🠖 4X</span>
                  </div>
                </div>
                <button className="w-full py-3 px-6 bg-teal-700 text-black font-semibold rounded-lg mt-4 hover:bg-teal-800 transition duration-200">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Investment Advice */}
            <div className="bg-gradient-to-r from-cyan-100 to-teal-600 bg-opacity-90 p-8 rounded-lg shadow-xl transition-all duration-300 hover:scale-105">
              <h3 className="text-3xl font-semibold text-gray-700 mb-6">
                Investment Advice
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Create wealth by earning a higher return on your money. Let your
                hard-earned money work harder when you sleep.
              </p>
              <ul className="text-gray-700 space-y-4 mt-2 mb-6">
                <li>
                  <span className="font-semibold">
                    Top 14-16 investment advice/year
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Fundamentally strong undervalued stock
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Short to medium-term investment (1-2 years)
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Great margin of safety, low downside risk
                  </span>
                </li>
                <li>
                  <span className="font-semibold">
                    Excellent risk reward ratio from 1:6 to 1:20
                  </span>
                </li>
              </ul>
              <div className="text-gray-800 space-y-4 pt-20">
                <p className="font-bold text-lg">Pricing</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>6 Months</span>
                    <span className="line-through text-gray-800">₹ 30000</span>
                    <span>₹ 25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12 Months</span>
                    <span className="line-through text-gray-800">₹ 55000</span>
                    <span>₹ 50,000</span>
                  </div>
                </div>
                <button className="w-full py-3 px-6 bg-teal-700 text-black font-semibold rounded-lg mt-4 hover:bg-teal-800 transition duration-200">
                  Subscribe Today
                </button>
              </div>
            </div>
          </div>

          {/* Left Table */}
          {/* <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white shadow-lg rounded-lg w-5/6">
              <thead>
                <tr className="bg-[rgb(41,170,152)] text-white">
                  <th className="py-4 px-6 text-left text-lg">Package</th>
                  <th className="py-4 px-6 text-center text-lg">Monthly</th>
                  <th className="py-4 px-6 text-center text-lg">Quarterly</th>
                  <th className="py-4 px-6 text-center text-lg">Six Months</th>
                  <th className="py-4 px-6 text-center text-lg">Yearly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-4 px-6 text-left text-gray-800 font-medium">
                    BTST+SHORT TERM CALLS
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="monthly"
                      id="monthly-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="monthly-1"
                      className="text-gray-700 font-medium"
                    >
                      100
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="quarterly"
                      id="quarterly-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="quarterly-1"
                      className="text-gray-700 font-medium"
                    >
                      250
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="sixmonths"
                      id="sixmonths-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="sixmonths-1"
                      className="text-gray-700 font-medium"
                    >
                      450
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="yearly"
                      id="yearly-1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="yearly-1"
                      className="text-gray-700 font-medium"
                    >
                      800
                    </label>
                  </td>
                </tr>
                <tr className="border-b border-gray-300 hover:bg-[rgb(218,245,240)]">
                  <td className="py-4 px-6 text-left text-gray-800 font-medium">
                    MULTIBAGGER STOCKS + SHORT TERM CALL + BTST CALLS.
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="monthly"
                      id="monthly-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="monthly-2"
                      className="text-gray-700 font-medium"
                    >
                      150
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="quarterly"
                      id="quarterly-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="quarterly-2"
                      className="text-gray-700 font-medium"
                    >
                      400
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="sixmonths"
                      id="sixmonths-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="sixmonths-2"
                      className="text-gray-700 font-medium"
                    >
                      750
                    </label>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <input
                      type="radio"
                      name="yearly"
                      id="yearly-2"
                      className="mr-2"
                    />
                    <label
                      htmlFor="yearly-2"
                      className="text-gray-700 font-medium"
                    >
                      1300
                    </label>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div> */}

          {/* Right Payment Card */}
          {/* <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-96">
            <h2 className="text-2xl font-bold text-center text-teal-500 mb-4">
              Payment Info
            </h2>
          </div> */}
        </div>
      </div>
      <div className="bg-gray-100 flex items-center justify-center px-4 sm:px-8 py-6">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-8 sm:p-12 text-center">
          <h1 className="text-3xl sm:text-2xl font-extrabold text-gray-800 mb-6">
            BTST + SHORT TERM CALLS
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            In this pack, you'll get daily 1 - 2 Cash Calls (BTST + Short Term
            Calls). You will also receive important market alerts during trading
            hours, keeping you informed for smarter decisions.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 flex items-center justify-center px-4 sm:px-8 pb-10">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-xl p-8 sm:p-12 text-center">
          <h1 className="text-3xl sm:text-2xl font-extrabold text-gray-800 mb-6">
            MULTIBAGGER STOCKS + SHORT TERM CALL + BTST CALLS
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
            We offer 5-7 or sometimes 8 stocks in multibagger stocks (Stocks
            10x) per year. You can hold these stocks for 6 months (minimum) to 1
            year or 2 years (maximum). Multibagger is the best way to make a
            profit because in intraday trading if you make income in one day,
            you can lose the very another day. But in delivery, if you hold good
            stocks, you can earn a huge profit. Each share will be provided to
            you with a gap of 2 or 3 months.
          </p>
        </div>
      </div>
    </>
  );
};
export default Services;

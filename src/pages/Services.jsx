const Services = () => {
  return (
    <>
      <header className="bg-teal-700 text-white text-center py-6 shadow-lg">
        <h1 className="text-3xl font-bold uppercase">Services</h1>
      </header>
      <div className="flex  justify-center  bg-gray-100 pt-8 pb-4">
        <div className="w-full max-w-6xl px-4">
          {/* Left Table */}
          <div className="overflow-x-auto">
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
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
          </div>

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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
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
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          BTST + SHORT TERM CALLS
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
          In this pack, you'll get daily 1 - 2 Cash Calls (BTST + Short Term
          Calls). You will also receive important market alerts during trading
          hours, keeping you informed for smarter decisions.
        </p>

      </div>
      </div>
    </>
  );
};
export default Services;

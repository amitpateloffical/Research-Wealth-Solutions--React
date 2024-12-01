const IntradayCalls = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white text-center py-6 shadow-lg">
        <h1 className="text-4xl font-bold uppercase">Intraday Calls</h1>
      </header>

      {/* Cards Section */}
      <main className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Intraday Calls for Today
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="w-80 mx-auto border rounded-lg shadow-md font-sans overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center p-4 relative">
              {/* Logo */}
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h2 className="text-2xl font-bold uppercase mt-2 tracking-wider">
                IREDA
              </h2>
              <p className="text-lg font-semibold">Buy</p>
            </div>

            {/* Body */}
            <div className="bg-gray-50 py-6 px-6 space-y-5">
              {/* Buy at */}
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <div className="flex items-center space-x-3">
                  <p className="text-gray-700 font-semibold text-lg">Buy at</p>
                </div>
                <p className="text-gray-900 font-bold text-xl">210-211</p>
              </div>

              {/* Today's Target */}
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <div className="flex items-center space-x-3">
                  <p className="text-gray-700 font-semibold text-lg">
                    Today's Target
                  </p>
                </div>
                <p className="text-gray-900 font-bold text-xl">218-223</p>
              </div>

              {/* Stop Loss */}
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <div className="flex items-center space-x-3">
                  <p className="text-gray-700 font-semibold text-lg">
                    Stop Loss
                  </p>
                </div>
                <p className="text-gray-900 font-bold text-xl">203</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-80 mx-auto bg-white rounded-lg shadow-lg border-2 hover:scale-105 transform transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center p-4 relative">
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h3 className="text-2xl font-bold mt-4 uppercase">HUDCO</h3>
              <p className="text-lg font-semibold italic">Buy</p>
            </div>
            <div className="bg-gray-50 py-6 px-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Buy at</p>
                <p className="text-gray-900 font-bold text-xl">228-229</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">
                  Today's Target
                </p>
                <p className="text-gray-900 font-bold text-xl">240-245</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Stop Loss</p>
                <p className="text-gray-900 font-bold text-xl">220</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-80 mx-auto bg-white rounded-lg shadow-lg border-2  hover:scale-105 transform transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center p-4 relative">
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h3 className="text-2xl font-bold mt-4 uppercase">MAZDOCK</h3>
              <p className="text-lg font-semibold italic">Buy</p>
            </div>
            <div className="bg-gray-50 py-6 px-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Buy at</p>
                <p className="text-gray-900 font-bold text-xl">4520-4530</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">
                  Today's Target
                </p>
                <p className="text-gray-900 font-bold text-xl">4630-4650</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Stop Loss</p>
                <p className="text-gray-900 font-bold text-xl">4450</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-80 mx-auto bg-white rounded-lg shadow-lg  border-2hover:scale-105 transform transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center p-4 relative">
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h3 className="text-2xl font-bold mt-4 uppercase">NEW STOCK</h3>
              <p className="text-lg font-semibold italic">Buy</p>
            </div>
            <div className="bg-gray-50 py-6 px-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Buy at</p>
                <p className="text-gray-900 font-bold text-xl">500-510</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">
                  Today Target
                </p>
                <p className="text-gray-900 font-bold text-xl">520-530</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Stop Loss</p>
                <p className="text-gray-900 font-bold text-xl">490</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <section className="mt-12 p-6 lg:p-16 bg-white rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            What is Intraday Trading?
          </h2>
          <p className="text-gray-600 mb-6">
            Intraday trading involves buying and selling financial instruments
            like stocks and commodities within the same day. It takes advantage
            of price movements during the day.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Square Off in Trading
          </h2>
          <p className="text-gray-600 mb-6">
            Intraday traders use the square-off technique to reverse positions
            and book profit or loss during the same trading day.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Example of Intraday Trading
          </h2>
          <p className="text-gray-600 mb-6">
            A trader buys 150 shares at Rs. 1500 and sells them at Rs. 1530,
            making Rs. 4500 in profit within the same day.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Tips for Intraday Trading
          </h2>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>Be patient and plan carefully.</li>
            <li>Focus on fewer stocks for better results.</li>
            <li>Cut losses using stop-loss principles.</li>
            <li>Stay emotionally stable and learn from mistakes.</li>
            <li>Never over-leverage or buy on margins.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IntradayCalls;

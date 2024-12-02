const IntradayCalls = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Header */}
      <header className="bg-teal-700 text-white text-center py-6 shadow-lg">
        <h1 className="text-3xl font-bold uppercase">Intraday Calls</h1>
      </header>

      {/* Cards Section */}
      <main className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Intraday Calls for Today
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {/* Card 1 */}
          <div className="w-80 mx-auto border rounded-lg shadow-md font-sans overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-50 to-teal-600 text-white text-center p-4 relative">
              {/* Logo */}
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10 w-28"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 m-2 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h2 className="text-xl font-bold uppercase mt-2 tracking-wider">
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
                    Today Target
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
          <div className="w-80 mx-auto border rounded-lg shadow-md font-sans overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-cyan-50 to-teal-600 text-white text-center p-4 relative">
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 m-2 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h3 className="text-xl font-bold mt-4 uppercase">HUDCO</h3>
              <p className="text-lg font-semibold">Buy</p>
            </div>
            <div className="bg-gray-50 py-6 px-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Buy at</p>
                <p className="text-gray-900 font-bold text-xl">228-229</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">
                  Today Target
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
          <div className="w-80 mx-auto border rounded-lg shadow-md font-sans overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-cyan-50 to-teal-600 text-white text-center p-4 relative">
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 m-2 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h3 className="text-xl font-bold mt-4 uppercase">MAZDOCK</h3>
              <p className="text-lg font-semibold">Buy</p>
            </div>
            <div className="bg-gray-50 py-6 px-6 space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">Buy at</p>
                <p className="text-gray-900 font-bold text-xl">4520-4530</p>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-green-50 transition">
                <p className="text-gray-700 font-semibold text-lg">
                  Today Target
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
          <div className="w-80 mx-auto border rounded-lg shadow-md font-sans overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-gradient-to-r from-cyan-50 to-teal-600 text-white text-center p-4 relative">
              <div className="flex">
                <img
                  src="/images/logo.png"
                  alt="Company Logo"
                  className="h-10"
                />
              </div>
              {/* Date */}
              <p className="absolute top-2 right-4 text-sm font-medium bg-white text-green-700 px-2 py-1 m-2 rounded-md shadow">
                11/29/2024
              </p>
              {/* Title */}
              <h3 className="text-xl font-bold mt-4 uppercase">NTPC GREEN</h3>
              <p className="text-lg font-semibold">Buy</p>
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
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            What is Intraday Trading?
          </h2>
          <p className="text-gray-600 mb-6">
            Intraday trading involves buying and selling financial instruments
            like stocks and commodities within the same day. It takes advantage
            of price movements during the day.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-6 text-gray-800">
            Square Off in Trading:
          </h2>
          <p className="text-gray-600 mb-6">
            Intraday traders use the square-off technique to reverse positions
            and book profit or loss during the same trading day.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Example of Intraday Trading:
          </h2>
          <p className="text-gray-600 mb-6">
            Rahul bought 150 shares of Facebook at Rs. 1500 each in the morning,
            spending Rs. 2,25,000. By afternoon, the price increased to Rs.
            1530, and he sold all shares for Rs. 2,29,500, making a profit of
            Rs. 4500. This is an example of intraday trading, where shares are
            bought and sold on the same day to earn quick profits.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Advantages of Intraday Trading:
          </h2>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>No overnight risks as trades are closed the same day.</li>
            <li>
              Requires less capital, making it accessible to more traders.
            </li>
            <li>
              Offers the flexibility to trade from anywhere at your convenience.
            </li>
            <li>
              Enables the use of tight stop-loss orders to minimize risks.
            </li>
            <li>Low brokerage fees, often as low as one paise per trade.</li>
            <li>
              Helps traders gain experience and understand market trends faster.
            </li>
            <li>
              Provides opportunities to make quick profits in a short time frame
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Disadvantages of Intraday Trading:
          </h2>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">High Risk: </span>Short-term
              trading can lead to big losses if decisions are not quick and
              accurate.{" "}
            </li>
            <li>
              <span className="font-semibold">Time-Consuming: </span>Requires
              full attention and cannot be done alongside other tasks.
            </li>
            <li>
              <span className="font-semibold">Knowledge Needed:</span> A trader
              must understand strategies and technical analysis.
            </li>
            <li>
              <span className="font-semibold">Focus on Quantity:</span> Traders
              often prioritize more trades over quality.
            </li>
            <li>
              <span className="font-semibold">Patience Required:</span> Success
              demands calmness, focus, and mental strength.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Tips and Strategies for Intraday Trading:{" "}
          </h2>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">Stay Patient: </span>Avoid rushing
              trades. Monitor price movements throughout the session to maximize
              profits.{" "}
            </li>
            <li>
              <span className="font-semibold">Focus on Few Stocks: </span>
              Trading fewer stocks ensures better focus and efficiency.
            </li>
            <li>
              <span className="font-semibold">Cut Losses Quickly: </span>Use
              stop-loss to exit trades if they don't meet your expectations.
            </li>
            <li>
              <span className="font-semibold">Stick to Trading: </span>Don’t
              turn a losing trade into an unplanned investment. Close all
              positions by session end.
            </li>
            <li>
              <span className="font-semibold">Control Emotions: </span>Stay calm
              and stable. Emotional decisions can lead to mistakes.{" "}
            </li>
            <li>
              <span className="font-semibold">Plan Ahead: </span>Strategize
              trades to minimize losses and maximize gains.{" "}
            </li>
            <li>
              <span className="font-semibold">Learn from Mistakes: </span>
              Analyze failures, identify patterns, and improve continuously.{" "}
            </li>
            <li>
              <span className="font-semibold">Set Realistic Goals: </span>Have
              clear entry/exit points and risk limits for each trade.{" "}
            </li>
            <li>
              <span className="font-semibold">Avoid Borrowing: </span>Trade with
              your own capital. Borrowing can lead to unnecessary financial
              stress.{" "}
            </li>
            <li>
              <span className="font-semibold">Take Care of Yourself: </span>
              Relax and take breaks to avoid burnout. A healthy mind leads to
              better decisions.{" "}
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-6 text-gray-800">
            Who Should Engage in Intraday Trading?
          </h2>
          <ul className="list-disc pl-8 text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">Capital Requirement: </span>Individuals with sufficient capital can trade multiple stocks, while those with limited funds can still profit through small, well-planned trades. The key is having the right mindset and motivation.
            </li>
            <li>
              <span className="font-semibold">Personal Factors: </span>Intraday trading suits those seeking daily profits and a stable portfolio. It’s not ideal for people focused on long-term investments or specific return rates over time..         </li>
            <li>
              <span className="font-semibold">Time Commitment: </span> Intraday trading demands time to analyze trends, monitor positions, and learn daily lessons. It’s best for those who can fully dedicate themselves, as balancing it with a demanding job or business is challenging. Success requires focus, decisiveness, and risk tolerance.
            </li>
           
          </ul>
        </section>
      </main>
    </div>
  );
};

export default IntradayCalls;

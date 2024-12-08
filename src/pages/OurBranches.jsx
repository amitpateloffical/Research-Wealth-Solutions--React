const OurBranches = () => {
  const stocks = [
    {
      name: "INDIAMART",
      boughtAt: "2000",
      hit: "2500",
      completedIn: "3 Months",
      targetAchieved: true,
    },
    {
      name: "IOL CHEMICAL",
      boughtAt: "500",
      hit: "700",
      completedIn: "2 Months",
      targetAchieved: true,
    },
    {
      name: "LTI",
      boughtAt: "4200",
      hit: "5000",
      completedIn: "4 Months",
      targetAchieved: true,
    },
    {
      name: "JB CHEMICALS",
      boughtAt: "1500",
      hit: "2000",
      completedIn: "5 Months",
      targetAchieved: true,
    },
    {
      name: "RELIANCE",
      boughtAt: "2100",
      hit: "2500",
      completedIn: "1 Month",
      targetAchieved: true,
    },
    {
      name: "TCS",
      boughtAt: "3100",
      hit: "3500",
      completedIn: "6 Months",
      targetAchieved: true,
    },
    {
      name: "INFOSYS",
      boughtAt: "1400",
      hit: "1800",
      completedIn: "4 Months",
      targetAchieved: true,
    },
    {
      name: "WIPRO",
      boughtAt: "400",
      hit: "550",
      completedIn: "3 Months",
      targetAchieved: true,
    },
    {
      name: "HDFC BANK",
      boughtAt: "1200",
      hit: "1500",
      completedIn: "2 Months",
      targetAchieved: true,
    },
    {
      name: "ICICI BANK",
      boughtAt: "800",
      hit: "1000",
      completedIn: "1 Month",
      targetAchieved: true,
    },
  ];

  return (
    <>
      <header className="bg-teal-700 text-white text-center py-6 shadow-lg">
        <h1 className="text-3xl font-bold uppercase">Our Branches</h1>
      </header>

      <div className="p-8 bg-gray-100">
        {/* Section Header */}
        <h2 className="text-3xl text-gray-700 font-semibold uppercase py-2 text-center">
          Multibagger Stocks
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Explore short-term and long-term multibagger stock insights
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-cyan-100 to-teal-600 text-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold">{stock.name}</h3>
                <p className="text-sm italic">Stock 10x</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-cyan-100 to-teal-700 text-white shadow-lg p-2 rounded-md text-center">
                  <span>Bought at:</span> {stock.boughtAt}
                </div>
                <div className="bg-gradient-to-r from-cyan-100 to-teal-700 text-white shadow-lg p-2 rounded-md text-center">
                  <span>Hit:</span> {stock.hit}
                </div>
                <div className="bg-gradient-to-r from-cyan-100 to-teal-700 text-white shadow-lg p-2 rounded-md text-center">
                  <span>Completed In:</span> {stock.completedIn}
                </div>
              </div>
              <button
                className={`mt-4 py-2 px-4 rounded-md w-full font-semibold shadow-lg ${
                  stock.targetAchieved
                    ? "bg-teal-700 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {stock.targetAchieved ? "Target Achieved" : "In Progress"}
              </button>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="text-center mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg">
            Subscribe for More
          </button>
        </div>

        <div className="mt-8 p-6 lg:p-16 bg-white rounded-lg shadow-lg mx-auto space-y-6">
      <p className="text-gray-600">
        After huge requests from our clients, we started providing a special service called STOCKS 10x to our worthy clients since August 2018. Stocks 10x is a High Return Delivery stocks which increase by several times in a very short period of time. Stocks that give returns many times their costs are known as multibagger stocks. This service is specially offered to those who are tired of everyday intraday trading and BTST, offering a trouble-free long-term investment that gives returns of more than 100%. Multibagger stocks provided by our analysts will help you increase your investment multiple times.
      </p>

      {/* What Do We Include In Our Multibagger Stocks (Stocks 10x)? */}
      <div>
        <h1 className="text-2xl  font-bold uppercase mb-3">What Do We Include In Our Multibagger Stocks (Stocks 10x)?</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-base">
          <li>Bullish India offers five stocks in multibagger stocks per year.</li>
          <li>You can hold these stocks for 6 months (minimum) to 1 year or 2 years (maximum).</li>
          <li>Multibagger is the best way to make a profit because in intraday trading if you make income in one day, you can lose it the very next day. But in delivery, if you hold good stocks, you can earn a huge profit.</li>
          <li>Each share will be provided to you with a gap of 2 or 3 months.</li>
        </ul>
      </div>

      {/* Our Multibagger Stocks Achievements */}
      <div>
        <h1 className="text-2xl font-bold uppercase mb-3">Our Multibagger Stocks Achievements</h1>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-base">
          <li>IOL CHEMICAL</li>
          <li>INDIAMART</li>
          <li>POLYCAB</li>
          <li>SADHNA NITRO</li>
          <li>REFEX Ind.</li>
          <li>LTI (Larsen and Toubro Infotech)</li>
          <li>MANGALAM ORGANICS</li>
          <li>NAM- INDIA</li>
          <li>INDIAMART Again Bought @ 2450 Level</li>
          <li>ECLERX</li>
          <li>JB-CHEMICALS</li>
          <li>LTTS</li>
        </ul>
      </div>

      {/* What Is Multibagger Stock? */}
      <div>
        <h1 className="text-2xl  font-bold uppercase mb-3">What Is Multibagger Stock?</h1>
        <p className="mb-3 text-gray-600">
          A Multibagger stock is difficult to define but you can positively identify it if you see one. A stock is known as a multibagger if its price, as per fundamental and technical research and analysis, increases by several times in a very short period of time.
        </p>
        <p className="mb-3 text-gray-600">
          For instance, if you had invested Rs 10,000 in Wipro in 1980, then that investment after analyzing all the splits and bonuses would be around Rs 700cr+ at the current market price, with no extra effort from your side. We are not even including the Rs 2cr that you will be getting as dividends each year.
        </p>
        <p className="text-gray-600">
          Let’s have a look at the top 15 stocks which made many investors crorepati as they grew 10,000-55,000% in past 10 years. Stocks like Tasty Bite Eatables Ltd, Avanti Feeds Ltd, Astral Poly Technik Ltd, Eicher Motors Ltd, Ajanta Pharma Ltd, Bharat Rasayan Ltd, La Opala RG Ltd, Vinati Organics Ltd, Symphony Ltd, Bajaj Finance Ltd, Relaxo Footwear Ltd, Safari Industries Ltd, Mayur Uniquoters Ltd, Natco Pharma Ltd, Sadhana Nitro Chem Ltd. These stocks have been multibagger many times over.
        </p>
      </div>

      {/* What Creates A Multibagger Stock? */}
      <div>
        <h1 className="text-2xl font-bold uppercase mb-3">What Creates A Multibagger Stock?</h1>
        <p className="mb-3 text-gray-600">
          There is not a single factor that creates a multibagger stock; basically, there have some or all of the following values in them.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Multibaggers are companies who are money-wise sound and have a great business figure that can be scaled within a short period of time. They must have a disruptive product or a disruptive idea in the business.</li>
          <li>A capability to scale up quickly is at the essence of becoming a multibagger. If a company is presenting uninterrupted growth for a longer sustainable period of time, then it would surely turn out to be a multibagger stock in the future.</li>
          <li>You just need to have a high amount of serenity while investing in these stocks because they take time for 5 to15 years to become a profitable multibagger.</li>
          <li>If we look at history then we can observe that small and mid-caps companies have offered the maximum number of multibagger stocks. Though, it does not mean that large-cap companies cannot be the multibagger stocks. Time and constant growth is what makes a stock a multibagger stock.</li>
        </ul>
        <p className="text-gray-600">
          If you already missed a few multibagger stocks in the past, no worries, Bullish India offers you a mind-blowing opportunity to gain profits. If you are fed up with doing Intra-Day & BTST then we are here to suggest you Stocks 10x, the best option for all of you.
        </p>
      </div>

      {/* Advantages of Investing in Multibagger Stocks with Bullish India */}
      <div>
        <h1 className="text-2xl font-bold uppercase mb-3">Advantages of Investing in Multibagger Stocks with Bullish India</h1>
        <p className="mb-3 text-gray-600">
          Multibaggers are important for some fundamental reasons. Even professional and experienced trading investors do not get all their intraday trading calls correct. In fact, some of them do not even get most of their investments hit on target. In the stock market, there are approximately 50% market performers, 30% underperformers, 15% outperformers, and just nearly 5% multibaggers. With this kind of blend, maximum portfolios are going to underperform the stock market. Getting into Titan at Rs.100 in 2005 and exiting at twice the price after a year is not excellent news. It is only when you make a 50-bagger in 10 years that you actually have a multibagger scene to show.
        </p>
        <p className="mb-3 text-gray-600">
          The fact is multibagger stocks are strengthened by a company that raises constantly over a period of time, has some unique features such as honest management, efficient funds allocation strategies, strong commercial production, and huge free cash progress.
        </p>
        <p className="mb-2 text-gray-600">
          There are some significant advantages of investing in multibagger stocks:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li className="mb-1 font-semibold">Getting a Missed Opportunity Advantage</li>
          <p className="text-gray-600">
            Several in the street term multibagger stocks as taking advantage of missed opportunities. As a result, you get the profit of buying these at a discount. You can bet on excellent growth by taking advantage of something that the market ignored. The stock may be underpriced just because the sector is out of favor. By getting an opportunity to buy at a lower price, you nail your bets on a reliable growth engine.
          </p>
          <li className="mb-1 font-semibold">Significant Return on Equity</li>
          <p className="text-gray-600">
            Normally the return on equity is in loads of ways your percentage of profit from an investment. Without a doubt, the multibagger stocks are associated with the highest returns. It rewards its investors with an above-average profitability margin. So by investing in these types of stocks, you are easily catching up on the growth trend very easily.
          </p>
          <li className="mb-1 font-semibold">Change Makers</li>
          <p className="mb-3 text-gray-600">
            Multibagger stocks are turnaround stories only because they can productively go through failures. Normally the higher growth is purely a process of some fundamental changes in a company and its outlook for the future. If you can position yourself in the right investment, you can really get a disproportionate reward.
          </p>
        </ul>
      </div>

      {/* The Right Time to Invest in Multibagger Stocks */}
      <div>
        <h1 className="text-2xl text-gray-800 font-bold uppercase mb-3">The Right Time to Invest in Multibagger Stocks</h1>
        <p className="mb-3 text-gray-600">
          The right time to invest in a multibagger stock is often hard to identify. Some multibagger stocks are present even when the market isn't performing well. But as soon as you feel that a stock is offering promising growth, that's the right time to enter. You should never wait for the market to be on its peak. The market's downtrend or low volatility is often the best time to invest in these stocks, as you can buy at a lower price and experience a higher return later.
        </p>
        <p className="mb-3 text-gray-600">
          The best way to invest in multibagger stocks is when a fundamentally strong stock corrects due to an external factor or market conditions. This is an opportunity to invest when the stock is undervalued. Then, with patience, you can watch the stock grow as the market recognizes its true potential.
        </p>
      </div>
    </div>

      </div>
    </>
  );
};

export default OurBranches;

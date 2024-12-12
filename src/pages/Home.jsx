// import { Link } from "react-router-dom";
// import { FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Home() {
  const data = [
    {
      detail:
        "Goodluck Capital would be the first investment solution that encourages its students / clients to do their own research as well. Thanks for your continuous support!",
      name: "Siddharth",
      profession: "It Professional",
      image: "",
    },

    {
      detail:
        "This firm is managed by Arjit. An exceptionally high qualified person I had came across so far. The stuffs I learned from him was way beyond my expectations!",
      name: "Bikram",
      profession: "Grment Merchandiser",
      image: "",
    },

    {
      detail:
        "Intially, I was trading by making guesses and on the advice of my friends and faced heavy loss. Then I started taking  the short term trading advices of Research wealth Solutions. Now I am gradually recovering all my losses.",
      name: "Samitra",
      profession: "Tourism",
      image: "",
    },

    {
      detail:
        "I am taking positional trading services from research wealth Solutions since last year and they  are providing me very balance and consistent profit. Thanks for your contniuous support.",
      name: "Arpita",
      profession: "Architect",
      image: "",
    },
  ];
  const numbers = [
    { value: "14", text: "Years wealth creation experience" },
    { value: "85%", text: "Trading Success" },
    { value: "96%", text: "Investment Success" },
    { value: "2000+", text: "Client Satisfaction" },
  ];

  return (
    <>
      <div id="banner">
        <div className="relative">
          <img
            src="https://wallpapers.com/images/high/inflation-stock-market-exhange-4kdmhjbew2br9aey.webp"
            alt="Banner Image"
            className="w-full object-cover min-h-[30rem] max-h-[40rem]" // Adjusted height for a taller banner
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-700 via-green-700 to-lime-800 opacity-75 flex items-center">
            {" "}
            {/* Background opacity only */}
            <div className="w-full px-4 py-6">
              {" "}
              {/* Adjusted padding for better spacing */}
              <div className="max-w-7xl mx-auto">
                <div className="mb-6 pl-4">
                  <div className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-3xl">
                    Empowering Traders to Seize Every Opportunity!
                  </div>
                </div>
                {/* <Link
          to="/"
          className="uppercase ml-2 font-medium text-sm cursor-pointer px-5 py-4 rounded bg-yellow-700 text-black drop-shadow-lg"
        >
          Explore More
        </Link> */}
                <div className="mt-10 px-6">
                  <h1 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold pb-4">
                    <span className="text-green-500">Be SMART</span> with your
                    money. We tell you three keys to unlock the{" "}
                    <span className="text-teal-400">profit</span> potential.
                  </h1>
                  <h2 className="text-white text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
                    <span className="text-green-500">WHERE</span> to invest?{" "}
                    <span className="text-green-500">WHEN</span> to invest and{" "}
                    <span className="text-teal-500">HOW LONG</span> to invest?
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certified Market Expert By */}
        <div className="w-full h-[28rem] lg:h-[18rem] bg-white p-5 flex flex-col items-center justify-center">
  <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-center text-gray-700 uppercase mb-8 text-shadow-md">
    Certified Market Expert By
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-28 px-8 lg:px-20 pt-6">
    <img
      src="https://goodluckcapital.com/wp-content/uploads/header-logo-300x96.png"
      className="h-12 mx-auto"
      alt="Certified Market Expert 1"
    />
      <img
      src="https://goodluckcapital.com/wp-content/uploads/z3-1.png"
      className="h-16 w-36 mx-auto" 
      alt="Certified Market Expert 3"
    />
    <img
      src="https://goodluckcapital.com/wp-content/uploads/IFTA-logo-1-300x77.jpg"
      className="h-14 mx-auto" 
      alt="Certified Market Expert 2"
    />
  
  </div>
</div>



        {/* What we Do */}
        <div className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/569/174/small_2x/stock-market-bull-vs-bear-graph-stock-market-graph-trading-investment-financial-stock-exchange-financial-stock-graph-chart-business-crisis-crash-loss-grow-up-gain-profits-win-up-trend-bullish-bearish-free-photo.jpg"
            alt="Banner Image"
            className="object-cover absolute top-0 left-0 h-full w-full" // Increased height for a taller banner
          />
          {/* Overlay Gradient */}
          <div className="relative z-10  bg-gradient-to-r from-teal-700 via-blue-700 to-lime-800 opacity-80 flex items-center py-8">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
              <h2 className="text-5xl font-bold text-center text-white mb-12">
                What We Do
              </h2>

              {/* Content Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Short Term Trading Advice */}
                <div className="bg-[#161e2e] bg-opacity-90 p-8 rounded-lg shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    Short Term Trading Advice
                  </h3>
                  <p className="text-lg text-white mb-6">
                    Leverage our knowledge to trade with confidence. Expert
                    advice for making money with specific targets and strict
                    stoploss.
                  </p>
                  <ul className="text-white space-y-4 mb-6">
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
                  <div className="text-white space-y-4">
                    <p className="font-bold text-lg">Pricing</p>
                    <div className="space-y-2  ">
                      <div className="flex justify-between">
                        <span>Basic Registration</span>
                        <span className=" text-gray-100 ">₹ 5500</span>
                        <span>6 Months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Premium Registration</span>
                        <span className=" text-gray-100 ">₹ 12500</span>
                        <span>12 Months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Basic Services</span>
                        <span className=" text-gray-100">
                          ₹ 25,000 to 50,000
                        </span>
                        <span>3 Months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Primium Services</span>
                        <span className=" text-gray-100 ">
                          ₹ 1 Lac to 2.10 Lac
                        </span>
                        <span>Return 🠖 4X</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Platinum Services</span>
                        <span className=" text-gray-100 ">
                          ₹ 2 Lac to 4 Lac
                        </span>
                        <span>Return 🠖 4X</span>
                      </div>
                    </div>
                    <button className="w-full py-3 px-6 bg-teal-700 text-black font-semibold rounded-lg mt-4 hover:bg-teal-800 transition duration-200">
                      Subscribe Now
                    </button>
                  </div>
                </div>

                {/* Investment Advice */}
                <div className="bg-[#161e2e] bg-opacity-90 p-8 rounded-lg shadow-xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-3xl font-semibold text-white mb-6">
                    Investment Advice
                  </h3>
                  <p className="text-lg text-white mb-6">
                    Create wealth by earning a higher return on your money. Let
                    your hard-earned money work harder when you sleep.
                  </p>
                  <ul className="text-white space-y-4 mb-6">
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
                  <div className="text-white space-y-4 pt-12">
                    <p className="font-bold text-lg">Pricing</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>6 Months</span>
                        <span className="line-through text-gray-400">
                          ₹ 30000
                        </span>
                        <span>₹ 25,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>12 Months</span>
                        <span className="line-through text-gray-400">
                          ₹ 55000
                        </span>
                        <span>₹ 50,000</span>
                      </div>
                    </div>
                    <button className="w-full py-3 px-6 bg-teal-700 text-black font-semibold rounded-lg mt-4 hover:bg-teal-800 transition duration-200">
                      Subscribe Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Power is Numbers */}
        <div className="w-full h-auto bg-white mt-6 mb-8 lg:mx-auto lg:p-8 rounded-lg">
      <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-bold text-gray-700 py-5 uppercase text-shadow-lg">
        Our Power is Numbers
      </h2>
      <div className="flex flex-col items-center lg:flex-row justify-evenly px-8 lg:px-20 pt-6 gap-6 lg:gap-12">
        {numbers.map((item, index) => (
          <div key={index} className="text-center mb-6 lg:mb-0">
            <h2 className="text-6xl font-bold text-blue-600 mb-2">{item.value}</h2>
            <p className="uppercase text-sm font-bold text-teal-900 pt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>

        {/* Subscribe with Us */}
        <div className="w-full h-auto bg-gradient-to-r from-teal-700 via-green-700 to-lime-800 py-10 lg:py-16 rounded-lg shadow-lg">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between px-6 lg:px-16">
            {/* Subscribe Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Subscribe with Us
              </h2>
              <p className="text-lg md:text-xl text-white mb-8">
                Get free Trading tips and Investment advice delivered to your
                inbox.
              </p>
              <form className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
                <input
                  type="email"
                  className="w-full md:w-8/12 px-4 py-3 rounded-lg shadow-md outline-none text-gray-700 placeholder-gray-500"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="w-full md:w-3/12 py-3 px-4 bg-teal-500 text-black font-bold rounded-lg shadow-md hover:bg-lime-600 transition-all"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-white mt-4 font-medium">
                We respect your <span className="text-lime-400">privacy</span>.
              </p>
            </div>

            {/* Slider Section */}
            <div className="w-full lg:w-1/2">
              <div className="max-w-[25rem] lg:max-w-[30rem] mx-auto">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center">
                        <p className="text-white text-lg leading-relaxed mb-6">
                          {item.detail}
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <img
                            src={
                              item.image ||
                              "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
                            }
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-full shadow-md"
                          />
                          <div>
                            <h3 className="text-white text-xl font-bold">
                              {item.name}
                            </h3>
                            <p className="text-white text-sm">
                              {item.profession}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

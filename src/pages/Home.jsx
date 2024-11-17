import { Link } from "react-router-dom"

function Home() {
     return (
          <>

               <div id="banner">
                    <div className="relative">
                         <img src={`${origin}/images/banner.jpg`} alt="..." className="w-full object-cover min-h-80 max-h-[32rem]" />
                         <div className="absolute top-0 left-0 w-full h-full flex items-center">
                              <div className="w-full px-2 py-3">
                                   <div className="max-w-7xl mx-auto">
                                        <div className="mb-5">
                                             <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl">Empowering Traders to Seize Every Opportunity!</div>
                                        </div>
                                        <Link to="/" className="uppercase font-medium text-sm cursor-pointer px-5 py-3 rounded bg-white">
                                             Explore More
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Home

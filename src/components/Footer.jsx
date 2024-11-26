import { Link } from "react-router-dom"
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";





export default function Footer() {
     return (
          <>

               <footer className="bg-slate-200">
                    <div className="max-w-7xl mx-auto px-4 font-medium">
                         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-4 py-10">
                              <div className="block lg:col-span-2">
                                   <div className="head text-xl uppercase font-bold mb-4 text-customTheme-theme1">About Company</div>
                                   <div className="grid gap-1">
                                        <LinkItem title="About Company 1" link="/" />
                                        <LinkItem title="About Company 2" link="/" />
                                        <LinkItem title="About Company 3" link="/" />
                                        <LinkItem title="About Company 4" link="/" />
                                        <LinkItem title="About Company 5" link="/" />
                                   </div>
                              </div>
                              <div className="block lg:col-span-2">
                                   <div className="head text-xl uppercase font-bold mb-4 text-customTheme-theme1">Products</div>
                                   <div className="grid gap-1">
                                        <LinkItem title="Products 1" link="/" />
                                        <LinkItem title="Products 2" link="/" />
                                        <LinkItem title="Products 3" link="/" />
                                        <LinkItem title="Products 4" link="/" />
                                        <LinkItem title="Products 5" link="/" />
                                   </div>
                              </div>
                              <div className="block lg:col-span-2">
                                   <div className="head text-xl uppercase font-bold mb-4 text-customTheme-theme1">Quick Links</div>
                                   <div className="grid gap-1">
                                        <LinkItem title="Home" link="/" />
                                        <LinkItem title="About Us" link="/" />
                                        <LinkItem title="Services" link="/" />
                                        <LinkItem title="Products" link="/" />
                                        <LinkItem title="Intraday Calls" link="/" />
                                        <LinkItem title="Our Branches" link="/" />
                                        <LinkItem title="Contact Us" link="/" />
                                   </div>
                              </div>
                              <div className="block md:col-span-3">
                                   <div className="head text-xl uppercase font-bold mb-4 text-customTheme-theme1">Contact</div>
                                   <div className="grid gap-1">
                                        <div className="flex gap-2 items-center">
                                             {/* <span className="text-lg inline-block pt-1"><Location01Icon /></span> */}
                                             <a href="#" target="_blank">SCO 150 & 55, Bridge Market, 17C, Sector 17, Chandigarh, 160017.</a>
                                        </div>
                                        <a className="flex gap-3 items-center" href={`tel:+910000000000`}>+91 7693898747</a>
                                        <a className="flex gap-3 items-center" href={`mailto:info@example.com`}>info@researchwealthsolutions.com</a>
                                        <div className="social flex gap-2 sm:gap-3 items-center mt-2">
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"><FaInstagram /></a>
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"><FaTelegramPlane /></a>
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"><FaSquareXTwitter /></a>
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"><FaYoutube /></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="copyright bg-customTheme-theme1 p-2 text-white text-center rounded-t-xl">
                              © 2024 Research Wealth Solutions. All Rights Reserved.
                         </div>
                    </div>
               </footer>

          </>
     )
}

const LinkItem = (_props) => {
     return (
          <>

               <Link to={_props.link} className="flex gap-3 items-center">
                    {/* <span className="text-lg">{_props.icon ? _props.icon : <Forward01Icon />}</span> */}
                    <span>{_props.title}</span>
               </Link>

          </>
     )
}

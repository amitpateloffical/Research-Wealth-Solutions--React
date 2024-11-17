import { Link } from "react-router-dom"

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
                                        <LinkItem title="Quick Links 1" link="/" />
                                        <LinkItem title="Quick Links 2" link="/" />
                                        <LinkItem title="Quick Links 3" link="/" />
                                        <LinkItem title="Quick Links 4" link="/" />
                                        <LinkItem title="Quick Links 5" link="/" />
                                   </div>
                              </div>
                              <div className="block md:col-span-3">
                                   <div className="head text-xl uppercase font-bold mb-4 text-customTheme-theme1">Contact</div>
                                   <div className="grid gap-1">
                                        <div className="flex gap-2 items-center">
                                             {/* <span className="text-lg inline-block pt-1"><Location01Icon /></span> */}
                                             <a href="#" target="_blank">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
                                        </div>
                                        <a className="flex gap-3 items-center" href={`tel:+910000000000`}>+91 00000 00000</a>
                                        <a className="flex gap-3 items-center" href={`mailto:info@example.com`}>info@example.com</a>
                                        <div className="social flex gap-2 sm:gap-3 items-center mt-2">
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"></a>
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"></a>
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"></a>
                                             <a href="#" target="_blank" className="border border-black rounded-full grid place-items-center w-8 h-8 text-sm sm:text-lg hover:bg-customTheme-theme2 hover:text-white hover:border-customTheme-theme1"></a>
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

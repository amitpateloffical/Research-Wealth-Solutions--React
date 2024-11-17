import { Link } from "react-router-dom"

function Header() {
     const { origin } = location;
     return (
          <>

               <header className="px-2 py-3">
                    <div className="flex justify-between items-center gap-4 max-w-7xl mx-auto">
                         <Link to="/">
                              <img src={`${origin}/images/logo.png`} alt="..." className="max-w-36" />
                         </Link>
                         <div className="flex gap-4 items-center">
                              <Link to="/" className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1">Home</Link>
                              <Link to="/" className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1">About Us</Link>
                              <Link to="/" className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1">Our Branches</Link>
                              <Link to="/" className="uppercase font-medium text-sm border-b-2 border-transparent transition-colors duration-300 hover:border-customTheme-theme1">Contact Us</Link>
                              <Link to="/" className="uppercase font-medium text-sm cursor-pointer px-5 py-2 text-white rounded bg-customTheme-theme1 hover:bg-customTheme-theme2">
                                   Sign In
                              </Link>
                         </div>
                    </div>
               </header>

          </>
     )
}

export default Header

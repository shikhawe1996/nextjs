import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full">
      <div className="container px-[160px] py-[50px]">
        <div className="col-wrap flex gap-4 items-center">
          <div className="col-span-2 w-2/5">
            <div className="image-wrap flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={56} height={56} />
              <p className="text-2xl text-white font-bold">Chef Kitchen.</p>
            </div>
            <div className="logo-description mt-5 max-w-xs">
              <p className='text-xs text-white mt-[8px] '>
                Open an account in minutes, get full financial control for much
                longer.
              </p>
            </div>
          </div>
          <div className="col-span-2 w-3/5">
            <div className="wrapper flex gap-4">
              <div className="wrap w-1/3">
                <h3 className="text-xl mb-[20px] font-bold">Company</h3>
                <ul>
                  <li className= " mb-[10px] ">
                    <a className="text-base text-white hover:text-orange  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                     Careers
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                      Mobile
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange  " href="#">
                      Blog
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                      How we work?
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wrap w-1/3">
                <h3 className="text-xl mb-[20px] font-bold">Information</h3>
                <ul>
                  <li className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange  " href="#">
                      Help/FAQ
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                     Press
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange  " href="#">
                     Affiliates
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                     Hotel owners
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange" href="#">
                     Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wrap w-1/3">
                <h3 className="text-xl mb-[20px] font-bold">More</h3>
                <ul>
                  <li className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                     Home
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange  " href="#">
                      About us
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange   " href="#">
                     Recipe
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                     Gallery
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base  text-white hover:text-orange " href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-[50px] flex justify-center items-center border-t-1 border-gray-500 py-[20px]">  
          <p className="text-white text-sm">
          @2025 - Chef kitchen. Distributed By ThemeWagon and Developed by GetNextjsTemplates
          </p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;

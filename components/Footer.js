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
              <p className='text-xs text-darkGray mt-[8px] '>
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
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray " href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wrap w-1/3">
                <h3 className="text-xl mb-[20px] font-bold">Company</h3>
                <ul>
                  <li className= " mb-[10px] ">
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray " href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div className="wrap w-1/3">
                <h3 className="text-xl mb-[20px] font-bold">Company</h3>
                <ul>
                  <li className= " mb-[10px] ">
                    <a className="text-base text-darkGray mb-[20px] " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray  " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray   " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray " href="#">
                      About
                    </a>
                  </li>
                  <li  className= " mb-[10px] ">
                    <a className="text-base text-darkGray " href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

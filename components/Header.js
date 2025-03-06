import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container px-[160px]">
        <div className="flex justify-between items-center py-4">
          <div className="logo">
            <div className="image-wrap flex gap-3 items-center justify-center">
              <Image src="/logo.png" alt="logo" width={56} height={56} />
              <p className="text-2xl text-white font-bold">Chef Kitchen.</p>
            </div>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a className="text-xl  text-white hover:text-orange uppercase" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-xl  text-white hover:text-orange uppercase" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-xl  text-white hover:text-orange uppercase" href="#">
                  Recipe
                </a>
              </li>
              <li>
                <a className="text-xl  text-white hover:text-orange uppercase" href="#">
                  Gallery
                </a>
              </li>
            </ul>
          </nav>
          <div className="last-wrap flex gap-8">
            <a
              href="#"
              className="border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-xl text-orange hover:text-white hover:bg-orange hover:border-orange"
            >
              Sign In
            </a>
            <a
              href="#"
              className="border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-xl text-orange hover:text-white hover:bg-orange hover:border-orange"
            >
              Sign Up{" "}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

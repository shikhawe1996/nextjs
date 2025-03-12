import Image from "next/image";
import Link from 'next/link'
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
                <Link
                  href="#"
                  className="text-xl  text-white hover:text-orange uppercase"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xl  text-white hover:text-orange uppercase"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/recipe"
                  className="text-xl  text-white hover:text-orange uppercase"
                >
                  Recipe
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-xl  text-white hover:text-orange uppercase"
                >
                  Gallery
                </Link>
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

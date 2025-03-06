import Image from "next/image";
const Footer = () => {
    return (
    <footer>
      <div className="container px-[80px]">
       <div className="col-wrap flex gap-4 items-center"> 
        <div className="col-span-2">
          <div className="image-wrap">
          <Image
              src="/image/logo.svg"
              alt="logo"
              width={56}
              height={56}
             />
          </div>
          <p>Open an account in minutes, get full financial control for much longer.</p>
          <div className="socal-icon">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div className="col-span-2">
          <div className="wrapper flex gap-4">
            <div className="wrap">
              <h3>company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="wrap">
              <h3>company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
            <div className="wrap">
              <h3>company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
          </div>
        </div>
       </div> 
      </div>
    </footer>
    )
}

export default Footer;
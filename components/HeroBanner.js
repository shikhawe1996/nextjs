import Image from "next/image";
const HeroBanner = () => {
  return (
    <section className="hero-banner text-gray-100">
     <div className="container px-[160px] py-[100px]">
      <div className="wrapper flex items-center"> 
       <div className="content-wrap w-[50%] ">
        <h1 className='text-7xl font-semibold text-white mb-[20px]'>Cook anything with the experts</h1>
        <p className='text-lg text-white mb-[50px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam</p>
        <div className="btn-wrap">
          <a className="border-1 border-orange bg-orange rounded-full py-[20px] px-[56px] text-xl text-white mr-[24px] hover:text-orange hover:bg-white hover:border-white" href="#">Lets Cook</a>
          <a className="border-1 text-orange rounded-full py-[20px] px-[56px] text-xl hover:text-white " href="#">Explore now</a>
        </div>
       </div>
       <div className="image-wrap w-[50%]">
        <Image
          src="/image/banner-image.png"
          alt="Hero Banner"
          width={624}
          height={578}
        />
       </div>
      </div>
     
    </div>
  </section>
  );
};

export default HeroBanner;

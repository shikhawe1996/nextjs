import Image from "next/image";
const HeroBanner = () => {
  return (
    <section className="hero-banner text-gray-100">
      <div className="container">
        <div className="wrapper flex items-center xxs:max-lg:w-full xxs:max-lg:flex-col-reverse">
          <div className="content-wrap w-[50%] xxs:max-lg:w-full xxs:max-lg:mt-[50px]">
            <h1 className="text-7xl font-semibold text-white mb-[20px]">
              Cook anything with the experts
            </h1>
            <p className="text-lg text-white mb-[50px]">
              Step into the kitchen with confidence as you cook alongside
              seasoned culinary professionals. Whether you are a beginner eager
              to master the basics or a home chef looking to try something new,
              our expert-led sessions make it easy to bring any recipe to life.
            </p>
            <div className="btn-wrap flex xxs:max-md:flex-col">
              <a
                className="border-1 border-orange bg-orange rounded-full py-[20px] px-[56px] text-xl text-white mr-[24px] hover:text-orange hover:bg-white hover:border-white"
                href="#"
              >
                Lets Cook
              </a>
              <a
                className=" xxs:max-md:mt-4 border-1 text-orange rounded-full py-[20px] px-[56px] text-xl hover:text-white "
                href="#"
              >
                Explore now
              </a>
            </div>
          </div>
          <div className="image-wrap w-[50%] xxs:max-lg:w-full">
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

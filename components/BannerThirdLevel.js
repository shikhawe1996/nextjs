import Image from "next/image";

const BannerThirdLevel = () => {
    return (
        <section className="banner-third-level">
        <div className="container">
          <div className="wrapper flex items-center xxs:max-md:w-full xxs:max-md:flex-col-reverse">
            <div className="text-wrap w-[50%] xxs:max-md:w-full">
              <h1 className='text-7xl font-semibold text-white mb-[20px] '> Recipe Awareness: Why It Matters</h1>
              <p className='text-lg text-white mb-[50px]'>Recipe awareness is all about understanding the ingredients, techniques, and nutritional value behind every dish you prepare or order. It empowers you to make informed choices about what you eat, catering to your dietary needs, taste preferences, and health goals. Being aware of a recipe’s components helps prevent allergies, manage calorie intake, and experiment confidently in the kitchen. It also encourages mindful cooking, reducing food waste and ensuring you use fresh, quality ingredients.</p>
              <div className="btn-wrap ">
                <a  className="border-1 border-orange bg-orange rounded-full py-[20px] px-[56px] text-xl text-white mr-[24px] hover:text-orange hover:bg-white hover:border-white" href="#">Learn More</a>
              </div>
            </div>
            <div className="image-wrap w-[50%] xxs:max-md:w-full">
                    <Image
                      src="/image/soup.svg"
                      alt="Hero Banner"
                      width={624}
                      height={578}
                    />
                   </div>
          </div>
        </div>
      </section>
  
    )
  }
  
  export default BannerThirdLevel;
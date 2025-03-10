import Image from "next/image";
const ColFourWrap = () => {
  return (
    <section className="py-10]"> 
      <div className="container mx-auto px-[160px] py-[80px]"> 
       <div className="text-center mb-8"> 
        <h5 className="text-lg text-orange uppercase mb-[12px]">Feature</h5>
        <h2 className="text-5xl font-semibold text-white">
          Get a many of interesting features.
        </h2>
       </div>
       <div className="flex flex-wrap justify-center  -mx-4 xxs:max-md:w-full xxs:max-md:flex-col"> 
        {/* Item 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8 "> 
          <div className="max-w-5xs relative">
            <div className="image-wrap ">
                   <Image
                     src="/image/featureOne.svg"
                     alt="featureOne"
                     width={305}
                     height={50}
                   />
            </div>
            <div className="text-center bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black p-[40px] absolute top-[120px] rounded-xl">
              <h3 className="text-white text-xl font-semibold mb-2">
                Menu variations
              </h3>
              <p className="text-white mb-4">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
              <div>
                <a
                  href="#"
                  className="text-lg text-button inline-block hover:text-white"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Item 2 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="max-w-5xs relative">
          <div className="image-wrap ">
                   <Image
                     src="/image/featureOne.svg"
                     alt="featureOne"
                     width={305}
                     height={305}
                   />
                  </div>
            <div className="text-center bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black p-[40px] absolute top-[120px] rounded-xl">
              <h3 className="text-white text-xl font-semibold mb-2">
                Menu variations
              </h3>
              <p className="text-white mb-4">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
              <div>
                <a
                  href="#"
                  className="text-lg text-button hover:text-white"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Item 3 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="max-w-5xs relative">
            <div className="image-wrap">
                   <Image
                     src="/image/featureOne.svg"
                     alt="featureOne"
                     width={305}
                     height={305}
                   />
            </div>
          <div className="text-center bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black p-[40px] absolute top-[120px] rounded-xl">
              <h3 className="text-white text-xl font-semibold mb-2">
                Menu variations
              </h3>
              <p className="text-white mb-4">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
              <div>
                <a
                  href="#"
                  className="text-lg text-button hover:text-white"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Item 4 */}
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
          <div className="max-w-5xs relative">
            <div className="image-wrap">
                   <Image
                     src="/image/featureOne.svg"
                     alt="featureOne"
                     width={305}
                     height={305}
                   />
            </div>
            <div className="text-center bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black p-[40px] absolute top-[120px] rounded-xl">
              <h3 className="text-white text-xl font-semibold mb-2">
                Menu variations
              </h3>
              <p className="text-white mb-4">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
              <div>
                <a href="#" className="text-lg text-button hover:text-white">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </section>
);
};

export default ColFourWrap;
import Image from "next/image";

const ColThreeWrap = () => {
  return (
    <section className="col-three-wrap pt-[80px]">
      <div className="container ">
        <div className="heading text-center group">
          <h5 className="text-lg text-orange uppercase mb-[12px]">
            Our Features
          </h5>
          <h3 className="text-5xl font-semibold text-white">
            Built and Designed with you in Mind
          </h3>
        </div>
        <div className="wrapper flex w-[calc(100%+20px)] mx-[-10px] flex-wrap mt-[60px] xxs:max-md:w-full xxs:max-md:flex-col">
          <div className="col w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="image-wrap flex justify-center">
              <Image
                src="/image/foodThree.jpg"
                alt="featureOne"
                width={305}
                height={305}
              />
            </div>
            <div className="content text-center">
              <h3 className="text-xl font-semibold text-white mt-[20px]">
                Built and Designed with You in Mind
              </h3>
              <p className="text-lg text-darkGray mt-[8px] max-w-lg">
                This is the original phrase — clear, customer-centric, and
                versatile. It emphasizes that every feature or product decision
                was made to benefit the user, perfect for websites, apps, or
                platforms offering personalized service.
              </p>
              <div className="button-wrap mt-[40px] mb-[20px]">
                <a
                  className="border-1 border-orange bg-orange  py-[10px] px-[30px] text-xl text-white hover:text-orange hover:bg-white hover:border-white"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="image-wrap flex justify-center">
              <Image
                src="/image/foodThree.jpg"
                alt="featureOne"
                width={305}
                height={305}
              />
            </div>
            <div className="content text-center">
              <h3 className="text-xl font-semibold text-white mt-[20px]">
                Crafted for Comfort, Designed for You
              </h3>
              <p className="text-lg text-darkGray mt-[8px] max-w-lg">
                Adds a warm and thoughtful tone. Suggests that both function and
                experience are tailored to make things easier or more enjoyable
                for the user. Great for lifestyle, wellness, or food apps that
                prioritize user satisfaction.
              </p>
              <div className="button-wrap mt-[40px] mb-[20px]">
                <a
                  className="border-1 border-orange bg-orange  py-[10px] px-[30px] text-xl text-white hover:text-orange hover:bg-white hover:border-white"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px] items-center">
            <div className="image-wrap flex justify-center">
              <Image
                src="/image/foodThree.jpg"
                alt="featureOne"
                width={305}
                height={305}
              />
            </div>
            <div className="content text-center">
              <h3 className="text-xl font-semibold text-white mt-[20px]">
                Tailored Features, Just for You
              </h3>
              <p className="text-lg text-darkGray mt-[8px] max-w-lg">
                Focuses on customization and relevance. It communicates that
                your service or platform offers flexible, user-specific options.
                Ideal for tech products, ordering apps, or anything that adapts
                to user preferences.
              </p>
              <div className="button-wrap mt-[40px] mb-[20px]">
                <a
                  className="border-1 border-orange bg-orange  py-[10px] px-[30px] text-xl text-white hover:text-orange hover:bg-white hover:border-white"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColThreeWrap;

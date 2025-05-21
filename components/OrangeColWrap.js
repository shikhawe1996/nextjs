import Image from "next/image";

const OrangeColWrap = () => {
  return (
    <section className="orange-col-wrap py-[80px] bg-orange ">
      <div className="container">
        <div className="content-wrap">
            <h5 className="text-lg text-orange uppercase mb-[12px]">
              Our Gallery
            </h5>
            <h2 className="text-5xl font-semibold text-white mb-[50px]">
            Delicious Moments from Our Kitchen
            </h2>
            <p className="text-lg text-white mt-[30px] max-w-lg">
              {" "}
              A warm and inviting heading that suggests care and quality in every dish, great for personal or home-style food brands.{" "}
            </p>
            <div className="btn-wrap mt-[60px]">
              <a
                className="border-1 border-white bg-white rounded-full py-[20px] px-[36px] text-xl text-orange"
                href="#"
              >
                Learn More
              </a>
            </div>
        </div>
          <div className="card-grid mt-[80px]">
            <div className="box-card flex flex-wrap gap-[24px]">
            <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">Gallery of Our Cooked Food</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">A simple, direct title that clearly tells the user what the section is. Ideal for straightforward or professional layouts</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">Taste the Visuals – Our Food Gallery</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">Combines sensory appeal with visual excitement. Good for apps or websites that want a stylish, foodie vibe</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4"> Chef’s Creations – A Feast for the Eyes</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">Highlights the expertise of chefs and adds elegance. Perfect for fine dining, curated meals, or premium brands.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">Fresh from the Stove – Dish Showcase</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out"> Adds a sense of freshness and immediacy. Works well for modern, casual food brands or delivery apps.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">From Our Kitchen to Your Screen</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">Emphasizes the connection between the chef’s kitchen and the customer’s experience. Suitable for virtual cooking platforms or home-based food services.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">Made with Love – Food Highlights</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out"> Friendly and emotional tone, suggesting homemade or heartful cooking. Ideal for local, family-run, or comfort food businesses.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">A Visual Treat of Flavors</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">A poetic and appealing heading that connects visuals with taste. Great for blogs or premium food photography pages.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">Snapshots of Sizzling Goodness</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">Fun and energetic tone, using casual language and visual cues. Works well for social media-focused food content.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">What’s Cooking? See for Yourself!</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">Conversational and playful. Encourages user curiosity. Best for modern, youthful food brands or mobile apps.</p>
              </div>
              <div className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">E-Prescribing</h3>
                <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default OrangeColWrap;

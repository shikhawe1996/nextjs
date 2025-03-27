import Image from "next/image";

const CardWithText = () => {
  return (
    <section className="card-with-text py-[80px] ">
      <div className="container">
        <div className="content-wrap flex gap-8 xxs:max-md:flex-col">
          <div className="left-wrap w-[50%] xxs:max-md:w-full">
            <h5 className="text-lg text-orange uppercase mb-[12px]">
              Our Gallery
            </h5>
            <h2 className="text-5xl font-semibold text-white mb-[50px]">
              Gallery of our cooked food.
            </h2>
            <p className="text-lg text-white mt-[30px] max-w-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam
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
          <div className="right-wrap w-[50%]">
            <div className="box-card flex flex-wrap gap-[24px] xxs:max-md:flex-col">
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[240px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Prescribing</h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[240px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[240px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Prescribing</h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[240px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[240px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Prescribing</h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[240px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[240px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Prescribing</h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[240px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[240px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Prescribing</h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[240px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[240px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">E-Prescribing</h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[240px] transition-all duration-300 ease-in-out">Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardWithText;

import Image from "next/image";

const FourCardWrap = () => {
    return (
        <section className="four-card-wrap pt-[60px]">
            <div className="container">
                <div className="heading text-center group">
                    <h5 className="text-lg text-orange uppercase mb-[12px]">Our Features</h5>
                    <h3 className="text-5xl font-semibold text-white">Built and Designed with you in Mind</h3>
                </div>
                <div className="column  flex flex-wrap gap-8 justify-center mt-[80px] xxs:max-md:w-full xxs:max-md:flex-col">
                    
                        <div className="card flex  bg-gray-100 gap-8 p-6 text-center items-center justify-between  ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>"Cooking made easy, fun, and delicious. I never thought meals at home could taste this good!"</p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Rajiv Mehta – Home Chef & Food Blogger</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="card flex  bg-gray-100 gap-8 p-6 text-center items-center justify-between ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>"Our customers love the simplicity and variety your platform offers. It's a game-changer for food delivery." </p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Emily Chen – Operations Manager, DineQuick</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    

                    
                        <div className="card flex  bg-gray-100 gap-8 p-6 text-center items-center justify-between ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>"From fresh ingredients to expert support, everything feels truly designed with users in mind." </p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Emily Chen – Operations Manager, DineQuick</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="card flex  bg-gray-100 gap-8 p-6 text-center items-center justify-between ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>"From fresh ingredients to expert support, everything feels truly designed with users in mind."</p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Amira Nasser – Founder, KitchenGlow</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                </div>





            </div>
        </section >
    )
}
export default FourCardWrap;
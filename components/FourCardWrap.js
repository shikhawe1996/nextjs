import Image from "next/image";

const FourCardWrap = () => {
    return (
        <section className="four-card-wrap pt-[60px]">
            <div className="container">
                <div className="heading text-center group">
                    <h5 className="text-lg text-orange uppercase mb-[12px]">Our Features</h5>
                    <h3 className="text-5xl font-semibold text-white">Built and Designed with you in Mind</h3>
                </div>
                <div className="column flex flex-wrap gap-8 justify-center mt-[80px] xxs:max-md:w-full xxs:max-md:flex-col">
                    <div className="wrap">
                        <div className="card flex bg-gray-100 gap-8 p-6 text-center items-center justify-between mb-[30px] ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus </p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Sandra Walton - CEO SomeCompany</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        </div>
                        <div className="card flex bg-gray-100 gap-8 p-6 text-center items-center justify-between ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus </p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Sandra Walton - CEO SomeCompany</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="wrap">
                        <div className="card flex bg-gray-100 gap-8 p-6 text-center items-center justify-between mb-[30px]">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus </p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Sandra Walton - CEO SomeCompany</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        </div>
                        <div className="card flex bg-gray-100 gap-8 p-6 text-center items-center justify-between ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus </p>
                                <h5 className="text-base font-semibold text-black mt-[20px">Sandra Walton - CEO SomeCompany</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src="/image/lady.avif"
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                />
                            </div>
                        </div>
                    </div>

                </div>





            </div>
        </section >
    )
}
export default FourCardWrap;
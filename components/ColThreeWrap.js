import Image from 'next/image';

const ColThreeWrap = () => {
    return (
        <section className="col-three-wrap pt-[80px]">
            <div className="container ">
                <div className="heading text-center group">
                    <h5 className="text-lg text-orange uppercase mb-[12px]">Our Features</h5>
                    <h3 className="text-5xl font-semibold text-white">Built and Designed with you in Mind</h3>
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
                            <h3 className="text-xl font-semibold text-white mt-[20px]">Cooking warw</h3>
                            <p className='text-lg text-darkGray mt-[8px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam</p>
                            <div className="button-wrap mt-[40px] mb-[20px]">
                                <a className="border-1 border-orange bg-orange  py-[10px] px-[30px] text-xl text-white hover:text-orange hover:bg-white hover:border-white" href="#">Learn More</a>
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
                            <h3 className="text-xl font-semibold text-white mt-[20px]">Cooking warw</h3>
                            <p className='text-lg text-darkGray mt-[8px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam</p>
                            <div className="button-wrap mt-[40px] mb-[20px]">
                                <a className="border-1 border-orange bg-orange  py-[10px] px-[30px] text-xl text-white hover:text-orange hover:bg-white hover:border-white" href="#">Learn More</a>
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
                            <h3 className="text-xl font-semibold text-white mt-[20px]">Cooking warw</h3>
                            <p className='text-lg text-darkGray mt-[8px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam</p>
                            <div className="button-wrap mt-[40px] mb-[20px]">
                                <a className="border-1 border-orange bg-orange  py-[10px] px-[30px] text-xl text-white hover:text-orange hover:bg-white hover:border-white" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ColThreeWrap
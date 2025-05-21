import Image from "next/image";

const FourCardWrap = () => {

    const CardData = [
        {
            id:1,
            image:"/image/lady.avif",
            review:"Cooking made easy, fun, and delicious. I never thought meals at home could taste this good!",
            name:"Rajiv Mehta – Home Chef & Food Blogger",
        },
        {
            id:2,
            image:"/image/lady.avif",
            review:"Our customers love the simplicity and variety your platform offers. It's a game-changer for food delivery.",
            name:"Emily Chen – Operations Manager, DineQuick",
        },
        {
            id:3,
            image:"/image/lady.avif",
            review:"From fresh ingredients to expert support, everything feels truly designed with users in mind.",
            name:"Amira Nasser – Founder, KitchenGlow",
        },
        {
            id:4,
            image:"/image/lady.avif",
            review:"From fresh ingredients to expert support, everything feels truly designed with users in mind.",
            name:"Emily Chen – Operations Manager, DineQuick",
        },
    ]
    return (
        <section className="four-card-wrap pt-[60px]">
            <div className="container">
                <div className="heading text-center group">
                    <h5 className="text-lg text-orange uppercase mb-[12px]">Our Features</h5>
                    <h3 className="text-5xl font-semibold text-white">Built and Designed with you in Mind</h3>
                </div>
                <div className="column  flex flex-wrap gap-8 justify-center mt-[80px] xxs:max-md:w-full xxs:max-md:flex-col">
                    {CardData.map((item, index) => (
                        <div key={index} className="card flex  bg-gray-100 gap-8 p-6 text-center items-center justify-between  ">
                            <div className="content-wrap max-w-[300px]">
                                <p className='text-lg text-darkGray mt-[15px] max-w-lg'>{item.review}</p>
                                <h5 className="text-base font-semibold text-black mt-[20px">{item.name}</h5>
                            </div>
                            <div className="image-wrap">
                                <Image
                                    src={item.image}
                                    alt="featureOne"
                                    width={96}
                                    height={96}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        ))}
                      

                </div>





            </div>
        </section >
    )
}
export default FourCardWrap;
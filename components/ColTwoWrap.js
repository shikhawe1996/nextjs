import Image from "next/image";

const ColTwoWrap = () => {
  return (
    <section className="col-two-wrap mt-[100px]">
        <div className="container">
         <div className="col-wrap flex gap-4 items-center xxs:max-md:w-full xxs:max-md:flex-col">
            <div className="image-wrap w-[50%] xxs:max-md:w-full">
                <Image
                  src="/image/cook.png"
                  alt="cook"
                  width={636}
                  height={714}
                  />
            </div>
            <div className="content-wrap w-[50%] xxs:max-md:w-full">
                <h5 className="text-lg text-orange uppercase mb-[12px]">cook with us</h5>
                <h2 className="text-5xl font-semibold text-white">Cooking together with the expert.</h2>
                <p className='text-lg text-darkGray mt-[8px] max-w-lg'>Join a fun, hands-on cooking experience where you’re never alone in the kitchen. Cook with us and follow step-by-step instructions guided by expert chefs who make every recipe easy and enjoyable. Whether you're mastering a classic dish or trying something new, you'll feel like you're cooking side by side with a pro. Cooking together with the expert means gaining confidence, learning techniques, and creating delicious meals—all from your own home. Let’s turn your kitchen into a place of learning, creativity, and great taste!</p>
                <div className="button-wrap mt-[50px]">
                     <a className="border-1 border-orange bg-orange rounded-full py-[20px] px-[56px] text-xl text-white hover:text-orange hover:bg-white hover:border-white" href="#">Learn More</a>
                </div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default ColTwoWrap
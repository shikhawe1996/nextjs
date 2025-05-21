import Image from "next/image";

const ContentWithLeftImage = () => {
  return (
    <section className="content-with-left-image pt-[80px]">
        <div className="container">
          
            <div className="flex gap-8 items-center mt-[150px] border-t-1 border-gray-500 py-[100px] xxs:max-md:flex-col">
                <div className="col-span-2 w-1/2">
                 <div className="image-wrap">
                      <Image
                         src="/image/foodTwo.jpg"
                         alt="featureOne.svg"
                         width={500}
                         height={300}
                      />
                 </div>
                </div>
                <div className="col-span-2 w-1/2">
                <h2 className="text-5xl font-semibold text-white max-w-md">Expertly Crafted Recipes and Culinary Excellence</h2>
                <p className='text-lg text-darkGray mt-[30px] max-w-lg'>Quality is more than just ingredients—it’s also about how the food is prepared. Our dishes are designed and perfected by experienced chefs who blend traditional techniques with innovative cooking methods. Each recipe undergoes rigorous testing to ensure balance, texture, and flavor harmony. From the perfect sear to the ideal seasoning, every step is executed with precision and care. This attention to culinary excellence means you receive meals that are not only delicious but also thoughtfully prepared to exceed your expectations every time.</p>
                </div>
            </div>
            
        </div>
    </section>
    
  )
}

export default ContentWithLeftImage
import Image from "next/image";

const ContentWithImage = () => {
  return (
    <section className="content-with-image pt-[80px]">
        <div className="container">
            <div className="flex gap-8 items-center xxs:max-md:w-full xxs:max-md:flex-col">
                <div className="col-span-2 w-1/2">
                <h2 className="text-5xl font-semibold text-white max-w-md">Premium Ingredients for Exceptional Taste</h2>
                <p className='text-lg text-darkGray mt-[30px] max-w-lg'>Our commitment to quality starts with sourcing only the finest, freshest ingredients. We believe great food begins with great produce, meats, and spices, carefully selected from trusted suppliers. This ensures every dish you order bursts with authentic flavor and nutrition. Whether it’s farm-fresh vegetables, high-grade meats, or aromatic herbs, our ingredients meet the highest standards to deliver an unmatched taste experience. By prioritizing quality at the very start, we guarantee that every bite delights your palate and maintains consistent excellence.</p>
                </div>
                <div className="col-span-2 w-1/2">
                 <div className="image-wrap">
                      <Image
                         src="/image/foodOne.jpg"
                         alt="featureOne"
                         width={500}
                         height={300}
                      />
                 </div>
                </div>
            </div>
            
        </div>
    </section>
    
  )
}

export default ContentWithImage
import Image from "next/image";

const ContentWithRightImage = () => {
  return (
    <section className="content-with-right-image pt-[80px]">
        <div className="container">
            
            <div className="flex gap-8 items-center mt-[150px] border-t-1 border-gray-500 py-[100px] xxs:max-md:flex-col">
                <div className="col-span-2 w-1/2">
                <h2 className="text-5xl font-semibold text-white max-w-md">Strict Hygiene and Safety Standards</h2>
                <p className='text-lg text-darkGray mt-[30px] max-w-lg'>Your health and safety are at the heart of our quality promise. We maintain strict hygiene protocols in every kitchen and delivery process. All our partners adhere to food safety regulations, ensuring clean environments, proper food handling, and safe packaging. From the moment ingredients arrive until your meal reaches your doorstep, we take every precaution to prevent contamination and preserve freshness. This dedication to safety guarantees that you enjoy not just tasty meals, but also peace of mind with every order.</p>
                </div>
                <div className="col-span-2 w-1/2">
                 <div className="image-wrap">
                      <Image
                         src="/image/foodFour.jpg"
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

export default ContentWithRightImage;
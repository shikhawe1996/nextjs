import Image from 'next/image';

const CardWithText = () => {
  return (
    <section className="card-with-text ">
        <div className="container px-[160px] py-[80px]">
          <div className="heading text-center group">
            <h5 className="text-lg text-orange uppercase mb-[12px]">Our Gallery</h5>
            <h2 className="text-5xl font-semibold text-white mb-[50px]">
              Gallery of our cooked food.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 -mx-4 xxs:max-md:w-full xxs:max-md:flex-col ">
              <div className="wrap">
                  <div className="card relative group">
                     <div className="image-wrap relative overflow-hidden rounded-3xl mb-6  group">
                       <Image
                               src="/image/foodOne.jpg"
                               alt="food-image"
                               width={604}
                               height={801}
                               className="rounded-lg"
                        />
                     </div>
                     <div className="content-wrap w-full   rounded-3xl  absolute bg-black/40  hidden group-hover:block group-hover:h-full group-hover:top-0 duration-500 p-12 ">
                        <div className="content-wrap absolute group-hover:top-[80%] ">
                             <p className="text-white text-2xl text-semibold">Name: Caesar Salad(187 Kcal)</p>
                             <div className="price-wrap flex justify-between w-full items-center mt-[20px]">
                                  <p className="text-white text-2xl" >Price: $10.00</p>
                                  <a href="#" className="text-lg border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-orange hover:text-white hover:bg-orange hover:border-orange">Order Now</a>
                             </div>
                        </div>

                     </div>
            
                  </div>
                  <div className="card relative group">
                     <div className="image-wrap relative overflow-hidden rounded-3xl mb-6 group  ">
                       <Image
                               src="/image/foodTwo.jpg"
                               alt="food-image"
                               width={604}
                               height={401}
                               className="rounded-lg"
                        />
                     </div>
                     <div className="content-wrap w-full   rounded-3xl  absolute bg-black/40  hidden group-hover:block group-hover:h-full group-hover:top-0 duration-500 p-12 ">
                        <div className="content-wrap absolute group-hover:top-[50%] ">
                             <p className="text-white text-2xl text-semibold">Name: Caesar Salad(187 Kcal)</p>
                             <div className="price-wrap flex justify-between w-full items-center mt-[20px]">
                                  <p className="text-white text-2xl" >Price: $10.00</p>
                                  <a href="#" className="text-lg border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-orange hover:text-white hover:bg-orange hover:border-orange">Order Now</a>
                             </div>
                        </div>

                     </div>
            
                  </div>
              </div>
              <div className="wrap ">
                  <div className="card relative group">
                     <div className="image-wrap relative overflow-hidden rounded-3xl mb-6 group">
                       <Image
                               src="/image/foodThree.jpg"
                               alt="food-image"
                               width={605}
                               height={375}
                               className="rounded-lg"
                        />
                     </div>
                     <div className="content-wrap w-full   rounded-3xl  absolute bg-black/40  hidden group-hover:block group-hover:h-full group-hover:top-0 duration-300 p-12 ">
                        <div className="content-wrap absolute group-hover:top-[60%] ">
                             <p className="text-white text-2xl text-semibold">Name: Caesar Salad(187 Kcal)</p>
                             <div className="price-wrap flex justify-between w-full items-center mt-[20px]">
                                  <p className="text-white text-2xl" >Price: $10.00</p>
                                  <a href="#" className="text-lg border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-orange hover:text-white hover:bg-orange hover:border-orange">Order Now</a>
                             </div>
                        </div>

                     </div>
            
                  </div>
                  <div className="card relative group">
                     <div className="image-wrap relative overflow-hidden rounded-3xl mb-6  group">
                       <Image
                               src="/image/foodFour.jpg"
                               alt="food-image"
                               width={604}
                               height={906}
                               className="rounded-lg"
                        />
                     </div>
                     <div className="content-wrap w-full   rounded-3xl  absolute bg-black/40  hidden group-hover:block group-hover:h-full group-hover:top-0 duration-500 p-12 ">
                        <div className="content-wrap absolute group-hover:top-[80%] ">
                             <p className="text-white text-2xl text-semibold">Name: Caesar Salad(187 Kcal)</p>
                             <div className="price-wrap flex justify-between w-full items-center mt-[20px]">
                                  <p className="text-white text-2xl" >Price: $10.00</p>
                                  <a href="#" className="text-lg border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-orange hover:text-white hover:bg-orange hover:border-orange">Order Now</a>
                             </div>
                        </div>

                     </div>
            
                  </div>
            
              </div>
          </div>
        </div>
    </section>
  )
}

export default CardWithText
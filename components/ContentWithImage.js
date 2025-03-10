import Image from "next/image";

const ContentWithImage = () => {
  return (
    <section className="content-with-image">
        <div className="container px-[160px] py-[50px]">
            <div className="flex gap-8 items-center xxs:max-md:w-full xxs:max-md:flex-col">
                <div className="col-span-2 w-1/2">
                <h2 className="text-5xl font-semibold text-white max-w-md">Cooking together with the expert.</h2>
                <p className='text-lg text-darkGray mt-[30px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
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
            <div className="flex gap-8 items-center mt-[150px] border-t-1 border-gray-500 py-[100px]">
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
                <h2 className="text-5xl font-semibold text-white max-w-md">Cooking together with the expert.</h2>
                <p className='text-lg text-darkGray mt-[30px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
                </div>
            </div>
            <div className="flex gap-8 items-center mt-[150px] border-t-1 border-gray-500 py-[100px]">
                <div className="col-span-2 w-1/2">
                <h2 className="text-5xl font-semibold text-white max-w-md">Cooking together with the expert.</h2>
                <p className='text-lg text-darkGray mt-[30px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
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

export default ContentWithImage
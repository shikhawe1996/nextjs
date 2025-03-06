import Image from "next/image";

const ColTwoWrap = () => {
  return (
    <section className="col-two-wrap">
        <div className="container px-[160px] py-[80px]">
         <div className="col-wrap flex gap-4 items-center">
            <div className="image-wrap w-[50%]">
                <Image
                  src="/image/cook.png"
                  alt="cook"
                  width={636}
                  height={714}
                  />
            </div>
            <div className="content-wrap w-[50%]">
                <h5 className="text-lg text-orange uppercase mb-[12px]">cook with us</h5>
                <h2 className="text-5xl font-semibold text-white">Cooking together with the expert.</h2>
                <p className='text-lg text-darkGray mt-[8px] max-w-lg'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
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
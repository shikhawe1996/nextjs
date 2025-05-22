import Image from "next/image";

const Cta = () => {
  return (
    <section className="cta relative w-full py-[80px] ">
     <div className="container">
        <div className="col-wrap flex gap-4 items-center bg-orange border-orange border-1 p-[100px] rounded-2xl ">
            <div className="col-span w-[50%] xxs:max-md:w-full">
              <h5 className="text-lg text-white uppercase mb-[12px]">NEWSLETTER</h5>
              <h2 className="text-5xl font-semibold text-white">Subscribe our newsletter.</h2>
              <div className="btn-wrap mt-[60px]">
              <a className="border-1 border-white bg-white rounded-full py-[20px] px-[36px] text-xl text-orange" href="#">Learn More</a>
              </div>
           </div>
           <div className="image-wrap w-[50%] absolute right-0  xxs:max-md:hidden">
              <Image
                src="/image/soup.svg"
                alt="cta"
                width={514}
                height={560}
             />
           </div>
        </div>


  
     </div>
  </section>
  )
}

export default Cta

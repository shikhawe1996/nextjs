import Image from "next/image";

const Cta = () => {
  return (
    <section className="cta relative w-full ">
     <div className="container px-[80px]">
        <div className="col-wrap flex gap-4 items-center bg-orange border-orange border-1 p-[40px]">
            <div className="col-span w-50%">
              <h5 className="text-lg text-white uppercase mb-[12px]">NEWSLETTER</h5>
              <h2 className="text-5xl font-semibold text-white">Subscribe our newsletter.</h2>
              <div className="email bg-black relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full mt-[40px]">
                  <input type="text" className="py-6 sm:py-8 text-sm w-full text-black dark:text-white rounded-full pl-4 par-87 focus:outline-none focus:text-orange" placeholder='@ enter your email-address'/>
              </div>
           </div>
           <div className="image-wrap w-50% absolute right-0">
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
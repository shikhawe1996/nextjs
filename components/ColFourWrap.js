import Image from "next/image";
import Link from 'next/link';
const ColFourWrap = () => {


  const ColData = [
    {
      id:1,
      image: "/image/featureOne.svg",
      title: "Easy Menu Browsing",
      description: "Users can explore a variety of restaurants and dishes, complete with images, prices, and descriptions.Filters like cuisine, rating, and dietary preferences make it simple to find exactly what you're craving.",
    },
    {
      id:2,
      image: "/image/featureOne.svg",
      title: "Quick & Secure Ordering",
      description: "Add items to your cart with one tap, apply discount codes, and check out using multiple secure payment options including cards, wallets, or cash on delivery.",
    },
    {
      id:3,
      image: "/image/featureOne.svg",
      title: "Real-Time Order Tracking",
      description: "Know exactly where your food is! Track your order from preparation to delivery with live updates, estimated time of arrival, and delivery partner info.",
    },
    {
      id:4,
      image: "/image/featureOne.svg",
      title: "Offers & Rewards",
      description: "Enjoy exclusive discounts, cashback offers, and loyalty points. Frequent users can save more with promo codes and reward-based reordering options.",
    },
  ]

  return (
    <section className="col-four-wrap py-[80px]"> 
      <div className="container"> 
       <div className="text-center mb-8"> 
        <h5 className="text-lg text-orange uppercase mb-[12px]">Feature</h5>
        <h2 className="text-5xl font-semibold text-white">
          Get a many of interesting features.
        </h2>
       </div>
       <div className="flex flex-wrap justify-center  -mx-4 xxs:max-md:w-full xxs:max-md:flex-col xxs:max-md:items-center "> 
        {/* Item 1 */}
        {ColData.map((item)=> (
        <div key={item.id}  className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8  hover:scale-105 transition-transform duration-300 ease-in-out "> 
          <div className="max-w-5xs relative">
            <div className="image-wrap flex justify-center ">
                   <Image
                     src={item.image}
                     alt={item.title}
                     width={305}
                     height={50}
                      className="h-auto w-auto"
                   />
            </div>
            <div className="text-center bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black p-[40px] absolute top-[120px] rounded-xl mt-[10px]">
              <h3 className="text-white text-xl font-semibold mb-2">
              {item.title}
              </h3>
              <p className="text-white mb-4">
              {item.description}
              </p>
              <div>
                <Link
                  href="#"
                  className="text-lg text-button inline-block hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
        ))}
        
       </div>
      </div>
    </section>
);
};

export default ColFourWrap;
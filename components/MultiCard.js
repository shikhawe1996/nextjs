import Image from "next/image";

const MultiCard = () => {
  const MultiData = [
    {
      id: 1,
      image: "/image/feature-icon-2.svg",
      title: "Sizzling Tandoori Chicken",
      description:
        "Char-grilled and spicy, this Indian dish is bursting with flavor and smoky aroma.",
    },
    {
      id: 2,
      image: "/image/feature-icon-2.svg",
      title: "Classic Margherita Pizza",
      description:
        "Topped with fresh basil, mozzarella, and tomato sauce for a light, crisp bite.",
    },
    {
      id: 3,
      image: "/image/feature-icon-2.svg",
      title: "Creamy Butter Paneer",
      description:
        "Smooth and rich tomato gravy with soft paneer cubes, perfect with naan or rice.",
    },
    {
      id: 4,
      image: "/image/feature-icon-2.svg",
      title: "Spaghetti Aglio e Olio",
      description:
        "Simple yet delicious pasta tossed in garlic, olive oil, and chili flakes.",
    },
    {
      id: 5,
      image: "/image/feature-icon-2.svg",
      title: "Loaded Veggie Burger",
      description:
        "Grilled vegetables stacked with cheese and sauces in a fresh whole-grain bun.",
    },
    {
      id: 6,
      image: "/image/feature-icon-2.svg",
      title: "Sweet and Sour Chicken",
      description:
        "A perfect balance of crispy chicken with tangy pineapple and pepper sauce.",
    },
    {
      id: 7,
      image: "/image/feature-icon-2.svg",
      title: "Herb-Crusted Salmon",
      description:
        "Tender salmon baked with a fresh herb crust, served over creamy mashed potatoes.",
    },
    {
      id: 8,
      image: "/image/feature-icon-2.svg",
      title: "Mango Sticky Rice",
      description:
        "Traditional Thai dessert with sweet sticky rice, fresh mango, and coconut cream.",
    },
    {
      id: 9,
      image: "/image/feature-icon-2.svg",
      title: "Traditional Dum Biryani",
      description:
        "Slow-cooked basmati rice layered with spices and meat or veggies, sealed with flavor.",
    },
    {
      id: 10,
      image: "/image/feature-icon-2.svg",
      title: "Chocolate Lava Cake",
      description:
        "Rich and gooey chocolate cake with molten center, served warm with vanilla ice cream.",
    },
  ];
  return (
    <section className="multiple-cards ">
      <div className="container ">
        <div className="heading pt-[60px] ">
          <div className="heading text-center group">
            <h5 className="text-lg text-orange uppercase mb-[12px]">
              Our Gallery
            </h5>
            <h2 className="text-5xl font-semibold text-white mb-[50px]">
              Gallery of our cooked food.
            </h2>
          </div>
        </div>
        <div className="multiple flex w-[calc(100%+20px)] mx-[-10px] flex-wrap mt-[30px] xxs:max-md:w-full xxs:max-md:flex-col">
          {/* 1 */}
          {MultiData.map((item, index) => (
            <div key={index} className="cards hover:scale-105 transition-transform duration-300 ease-in-out w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
              <div className="content-wrap max-w-[300px]">
                <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                  {item.title}
                </h5>
                <p className="text-base font-semibold text-black mt-[20px]">
                 {item.description}
                </p>
              </div>
              <div className="image-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={22}
                  height={22}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiCard;

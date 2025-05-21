import Image from "next/image";

const CardWithText = () => {
  return (
    <section className="card-with-text py-[80px] ">
      <div className="container">
        <div className="content-wrap flex gap-8 xxs:max-md:flex-col">
          <div className="left-wrap w-[50%] xxs:max-md:w-full">
            <h5 className="text-lg text-orange uppercase mb-[12px]">
              Our Gallery
            </h5>
            <h2 className="text-5xl font-semibold text-white mb-[50px]">
              Gallery of our cooked food.
            </h2>
            <p className="text-lg text-white mt-[30px] max-w-lg">
              Discover the delicious dishes prepared by our expert chefs.From
              sizzling mains to sweet treats, every plate is crafted with
              care.Feast your eyes and get inspired for your next meal!
            </p>
            <div className="btn-wrap mt-[60px]">
              <a
                className="border-1 border-white bg-white rounded-full py-[20px] px-[36px] text-xl text-orange"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="right-wrap w-[50%]">
            <div className="box-card flex flex-wrap gap-[24px] xxs:max-md:flex-col">
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {" "}
                  Grilled Lemon Herb Chicken
                </h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                  Juicy, tender chicken breasts marinated in lemon juice and
                  aromatic herbs, grilled to perfection and served with roasted
                  vegetables.
                </p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Creamy Garlic Shrimp Pasta
                </h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                  Succulent shrimp tossed in a rich garlic cream sauce over al
                  dente linguine, topped with fresh parsley and parmesan.
                </p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Spicy Veggie Stir-Fry
                </h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                  A colorful mix of bell peppers, broccoli, carrots, and baby
                  corn stir-fried in a spicy soy-ginger glaze. Vegan and full of
                  flavor.
                </p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Classic Margherita Pizza
                </h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                  A thin-crust pizza topped with homemade tomato sauce, fresh
                  mozzarella, and basil leaves. Simple, fresh, and delicious.
                </p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Butter Paneer Masala
                </h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                  Soft paneer cubes simmered in a creamy tomato-based curry with
                  a touch of Indian spices. Served with fluffy naan or rice.
                </p>
              </div>
              <div className="cards group  bg-orange card relative w-[288px] h-[170px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
                <div className="image-wrap">
                  <Image
                    src="/image/feature-icon-2.svg"
                    alt="featureOne"
                    width={22}
                    height={22}
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Chocolate Lava Cake
                </h3>
                <p className="text-white mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                  Warm, gooey chocolate cake with a molten center, served with a
                  scoop of vanilla ice cream and a drizzle of chocolate syrup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardWithText;

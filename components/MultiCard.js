import Image from "next/image";

const MultiCard = () => {
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
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Sizzling Tandoori Chicken
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Char-grilled and spicy, this Indian dish is bursting with flavor
                and smoky aroma.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Tandoori Chicken"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 2 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Classic Margherita Pizza
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Topped with fresh basil, mozzarella, and tomato sauce for a
                light, crisp bite.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Margherita Pizza"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 3 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Creamy Butter Paneer
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Smooth and rich tomato gravy with soft paneer cubes, perfect
                with naan or rice.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Butter Paneer"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 4 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Spaghetti Aglio e Olio
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Simple yet delicious pasta tossed in garlic, olive oil, and
                chili flakes.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Spaghetti"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 5 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Loaded Veggie Burger
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Grilled vegetables stacked with cheese and sauces in a fresh
                whole-grain bun.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Veggie Burger"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 6 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Sweet and Sour Chicken
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                A perfect balance of crispy chicken with tangy pineapple and
                pepper sauce.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Sweet Sour Chicken"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 7 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Herb-Crusted Salmon
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Tender salmon baked with a fresh herb crust, served over creamy
                mashed potatoes.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Salmon"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 8 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Mango Sticky Rice
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Traditional Thai dessert with sweet sticky rice, fresh mango,
                and coconut cream.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Mango Sticky Rice"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 9 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Traditional Dum Biryani
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Slow-cooked basmati rice layered with spices and meat or
                veggies, sealed with flavor.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Biryani"
                width={22}
                height={22}
              />
            </div>
          </div>

          {/* 10 */}
          <div className="cards w-[calc(25%-20px)] mb-[25px] mx-[10px] p-[20px] bg-white border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
            <div className="content-wrap max-w-[300px]">
              <h5 className="text-lg text-darkGray mt-[15px] max-w-lg">
                Chocolate Lava Cake
              </h5>
              <p className="text-base font-semibold text-black mt-[20px]">
                Rich and gooey chocolate cake with molten center, served warm
                with vanilla ice cream.
              </p>
            </div>
            <div className="image-wrap">
              <Image
                src="/image/feature-icon-2.svg"
                alt="Lava Cake"
                width={22}
                height={22}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiCard;

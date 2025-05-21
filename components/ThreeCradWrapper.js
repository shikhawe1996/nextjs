import Image from "next/image";
import Link from "next/link";

const ThreeCardWrapper = () => {

    const ColData = [
        {
            id:1,
            image: "/image/foodThree.jpg",
            title: "Understanding Ingredients",
            description: "Knowing what goes into a recipe helps you choose dishes that fit your taste, dietary restrictions, and nutritional needs. It also allows you to substitute ingredients safely and discover new flavors.",
        },
        {
            id: 2,
            image: "/image/foodThree.jpg",
            title: "Cooking Techniques Made Simple",
            description: "Recipe awareness includes learning the methods behind cooking each dish—whether it’s sautéing, baking, or marinating. Understanding techniques improves your skills and ensures better results every time.",
        },
        {
            id: 3,
            image: "/image/foodThree.jpg",
            title: "Nutritional Information Matters",
            description: "Being aware of calories, macros, and vitamins in a recipe helps you maintain a balanced diet. This knowledge supports healthy eating habits and helps manage conditions like diabetes or allergies.",
        },
        {
            id: 4,
            image: "/image/foodThree.jpg",
            title: "Allergy and Dietary Considerations",
            description: "Awareness of potential allergens (like nuts, gluten, or dairy) in recipes is crucial for safety. It also helps cater to specific diets like vegan, keto, or low-sodium, making meal choices easier and safer.",
        },
        {
            id: 5,
            image: "/image/foodThree.jpg",
            title: "Portion Control and Serving Sizes",
            description: "Understanding the correct portion sizes in a recipe prevents overeating and food waste. It helps you plan meals more efficiently, whether cooking for one or hosting a group.",
        },
        {
            id: 6,
            image: "/image/foodThree.jpg",
            title: "Sourcing Quality Ingredients",
            description: "Being mindful of where and how ingredients are sourced ensures better taste and nutrition. It also encourages supporting sustainable and ethical food practices, benefiting both you and the environment.",
        },
    ];

    return (
        <section className="three-card-wrapper">
            <div className="container">
                <div className="heading text-center group mb-[80px]">
                    <h5 className="text-lg text-orange uppercase mb-[12px]">Our Features</h5>
                    <h3 className="text-5xl font-semibold text-white">Built and Designed with you in Mind</h3>
                </div>
                <div className="column flex w-[calc(100%+20px)] mx-[-10px] flex-wrap mt-20 xxs:max-md:w-full xxs:max-md:flex-col">
                    {ColData.map((item, index) => (
                    <div key={index} className="card hover:scale-105 transition-transform duration-300 ease-in-out mb-[40px]  w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            < h5 className="text-xl font-semibold text-white mt-[20px">{item.title}
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>{item.description}</p>
                            <div className="btn">
                                <Link href="#">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    ))}
                  
                </div>

            </div>
        </section>

    )
}

export default ThreeCardWrapper;
import Image from "next/image";

const ThreeCardWrapper = () => {
    return (
        <section className="three-card-wrapper">
            <div className="container">
                <div className="heading text-center group mb-[80px]">
                    <h5 className="text-lg text-orange uppercase mb-[12px]">Our Features</h5>
                    <h3 className="text-5xl font-semibold text-white">Built and Designed with you in Mind</h3>
                </div>
                <div className="column flex w-[calc(100%+20px)] mx-[-10px] flex-wrap mt-20 xxs:max-md:w-full xxs:max-md:flex-col">
                    <div className="card w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src="/image/foodThree.jpg"
                                alt="featureOne"
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            <h5 className="text-xl font-semibold text-white mt-[20px">Understanding Ingredients
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Knowing what goes into a recipe helps you choose dishes that fit your taste, dietary restrictions, and nutritional needs. It also allows you to substitute ingredients safely and discover new flavors.</p>
                            <div className="btn">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src="/image/foodThree.jpg"
                                alt="featureOne"
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            <h5 className="text-xl font-semibold text-white mt-[20px">Cooking Techniques Made Simple
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Recipe awareness includes learning the methods behind cooking each dish—whether it’s sautéing, baking, or marinating. Understanding techniques improves your skills and ensures better results every time.</p>
                            <div className="btn">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[calc(33.33%-20px)] mx-[10px] p-[20px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src="/image/foodThree.jpg"
                                alt="featureOne"
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            <h5 className="text-xl font-semibold text-white mt-[20px">Nutritional Information Matters
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Being aware of calories, macros, and vitamins in a recipe helps you maintain a balanced diet. This knowledge supports healthy eating habits and helps manage conditions like diabetes or allergies.</p>
                            <div className="btn">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[calc(33.33%-20px)] mx-[10px] p-[20px] mt-[50px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src="/image/foodThree.jpg"
                                alt="featureOne"
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            <h5 className="text-xl font-semibold text-white mt-[20px"> Allergy and Dietary Considerations
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Awareness of potential allergens (like nuts, gluten, or dairy) in recipes is crucial for safety. It also helps cater to specific diets like vegan, keto, or low-sodium, making meal choices easier and safer.</p>
                            <div className="btn">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[calc(33.33%-20px)] mx-[10px] p-[20px] mt-[50px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src="/image/foodThree.jpg"
                                alt="featureOne"
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            <h5 className="text-xl font-semibold text-white mt-[20px">Portion Control and Serving Sizes
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Understanding the correct portion sizes in a recipe prevents overeating and food waste. It helps you plan meals more efficiently, whether cooking for one or hosting a group.

</p>
                            <div className="btn">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[calc(33.33%-20px)] mx-[10px] p-[20px] mt-[50px] border-solid border-stone-400 border rounded-lg xxs:max-md:w-full xxs:max-md:mb-[20px]">
                        <div className="image-wrap flex justify-center rounded-3xl">
                            <Image
                                src="/image/foodThree.jpg"
                                alt="featureOne"
                                width={500}
                                height={305}
                            />
                        </div>
                        <div className="text-wrap text-center mt-[30px]">
                            <h5 className="text-xl font-semibold text-white mt-[20px">Sourcing Quality Ingredients
                            </h5>
                            <p className='text-lg text-darkGray mt-[15px] max-w-lg'>Being mindful of where and how ingredients are sourced ensures better taste and nutrition. It also encourages supporting sustainable and ethical food practices, benefiting both you and the environment.</p>
                            <div className="btn">
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default ThreeCardWrapper;
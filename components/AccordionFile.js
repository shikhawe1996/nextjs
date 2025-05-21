"use client"

import React , {useState, useEffect, useLayoutEffect,useRef } from 'react';
const AccordionItem = ({index, title, content, isOpen, onClick}) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "10px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        maxWidth:"1000px",
        alignContent:"center",
      }}
    >
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
          padding: "15px",
          fontSize: "30px",
        
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div ref={ref} style={{ padding: "15px", fontSize: "20px",}}>
          {content}
        </div>
      </div>
    </div>
  );
};
const AccordionFile = ({ }) => {

  const accordionInfo = [
    {
      title: "Understanding Ingredients",
      text: "Knowing the ingredients in a recipe helps you choose meals that fit your taste and dietary needs. It also lets you substitute items safely and discover new flavors.",
      image: "/image/foodThree.jpg",
    },
    {
      title: "Nutritional Information Matters",
      text: "Being aware of calories and nutrients supports healthy eating and helps manage special diets or allergies, making every meal better for your wellbeing.",
      image: "/image/foodTwo.jpg",
    },
    {
      title: "Allergy and Dietary Considerations",
      text: "Recognizing potential allergens and dietary restrictions ensures safety and helps you select recipes that align with your lifestyle, like vegan, gluten-free, or low-sodium options.",
      image: "/image/foodOne.jpg",
    },
  ];
  
  


  const [activeTextIndex, setActiveTextIndex] = useState(null);
  const [activeInfoIndex, setActiveInfoIndex] = useState(0);
  const toggleTextIndex = (index) => {
    setActiveTextIndex(index);
  };
  const toggleImageIndex = (index) => {
    setActiveInfoIndex(index);
  };
  return(
<div className='container mx-auto'>
        <h3 className="text-5xl font-semibold mb-[30px]">Key Ingredients to Know</h3>
        <div
          className="main"
          style={{
            display: "flex",
            padding: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
            gap: "40px",
          }}
        >
          <div>
            {" "}
            {accordionInfo.map((item, index) => (
              <AccordionItem
                key={index}
                index={index}
                title={item.title}
                content={item.text}
                isOpen={activeTextIndex === index}
                onClick={() => {
                  toggleTextIndex(index);
                  toggleImageIndex(index);
                }}
              />
              
            ))}
          </div>

          <div
            className="image-wrap"
            style={{
              width: "320px",
              minHeight: "200px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            
            }}
          >
            <img
              src={accordionInfo[activeInfoIndex].image}
              alt={accordionInfo[activeInfoIndex].title}
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        </div>
      </div>
  )
}

export default AccordionFile;
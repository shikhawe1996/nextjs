
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OrangeColWrap = () => {
  const OrangeData = [
    {
      id: 1,
      image: "/image/feature-icon-2.svg",
      title: "Gallery of Our Cooked Food",
      description:
        "A simple, direct title that clearly tells the user what the section is. Ideal for straightforward or professional layouts",
    },
    {
      id: 2,
      image: "/image/feature-icon-2.svg",
      title: "Taste the Visuals  Our Food Gallery",
      description:
        "Combines sensory appeal with visual excitement. Good for apps or websites that want a stylish, foodie vibe",
    },
    {
      id: 3,
      image: "/image/feature-icon-2.svg",
      title: "Chefs Creations  A Feast for the Eyes",
      description:
        "Highlights the expertise of chefs and adds elegance. Perfect for fine dining, curated meals, or premium brands.",
    },
    {
      id: 4,
      image: "/image/feature-icon-2.svg",
      title: "Fresh from the Stove Dish Showcase",
      description:
        "Adds a sense of freshness and immediacy. Works well for modern, casual food brands or delivery apps.",
    },
    {
      id: 5,
      image: "/image/feature-icon-2.svg",
      title: "From Our Kitchen to Your Screen",
      description:
        "Emphasizes the connection between the chefs kitchen and the customers experience. Suitable for virtual cooking platforms or home-based food services.",
    },
    {
      id: 6,
      image: "/image/feature-icon-2.svg",
      title: "Made with Love  Food Highlights",
      description:
        "Friendly and emotional tone, suggesting homemade or heartful cooking. Ideal for local, family-run, or comfort food businesses.",
    },
    {
      id: 7,
      image: "/image/feature-icon-2.svg",
      title: "A Visual Treat of Flavors",
      description:
        "A poetic and appealing heading that connects visuals with taste. Great for blogs or premium food photography pages.",
    },
    {
      id: 8,
      image: "/image/feature-icon-2.svg",
      title: "Snapshots of Sizzling Goodness",
      description:
        "Fun and energetic tone, using casual language and visual cues. Works well for social media-focused food content.",
    },
    {
      id: 9,
      image: "/image/feature-icon-2.svg",
      title: "Whats Cooking? See for Yourself!",
      description:
        "Conversational and playful. Encourages user curiosity. Best for modern, youthful food brands or mobile apps.",
    },
    {
      id: 10,
      image: "/image/feature-icon-2.svg",
      title: "E-Prescribing",
      description:
        "Expect safe, clear prescriptions with automation built for high data quality and efficient prescriber/pharmacist collaboration.",
    },
  ];

  const [sortData , setSortData]= useState("");

  const DataHandle = [...OrangeData].sort((a,b) => {
    if(sortData === "asc"){
      return a.title.localeCompare(b.title);
    }
    else if((sortData === "desc")){
return b.title.localeCompare(a.title)
    }else{
      return 0;
    }
  })

  return (
    <section className="orange-col-wrap py-[80px] bg-orange ">
      <div className="container">
        <div className="content-wrap">
          <h5 className="text-lg text-orange uppercase mb-[12px]">
            Our Gallery
          </h5>
          <h2 className="text-5xl font-semibold text-white mb-[50px]">
            Delicious Moments from Our Kitchen
          </h2>
          <p className="text-lg text-white mt-[30px] max-w-lg">
            {" "}
            A warm and inviting heading that suggests care and quality in every
            dish, great for personal or home-style food brands.{" "}
          </p>
          <div className="btn-wrap mt-[60px]">
            <Link
              className="border-1 border-white bg-white rounded-full py-[20px] px-[36px] text-xl text-orange"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="sorting flex gap-3 justify-end mb-[30px] mt-[30px]">
          <label htmlFor="sorting">Sort By:</label>
          <div>
            <label className="mr-2" htmlFor="default">Default</label>
            <input type="radio" id="default" value="" name="sorting" checked={sortData === ""} onChange={(event) => setSortData(event.target.value)} />
          </div>
          <div>
            <label className="mr-2" htmlFor="ascending">A-Z</label> 
            <input type="radio" id="ascending" value="asc" name="sorting" checked={sortData === "asc"} onChange={(event) => setSortData(event.target.value)} />
          </div>
          <div>
            <label className="mr-2" htmlFor="descending">Z-A</label>
            <input type="radio" id="descending" value="desc" name="sorting" checked={sortData === "desc"} onChange={(event) => setSortData(event.target.value)} />
          </div>
        </div>
        <div className="card-grid mt-[80px]">
          <div className="box-card flex flex-wrap gap-[24px]">
            {DataHandle.map((item,index)=>(
            <div key={index} className="cards group bg-white  relative w-[288px] h-[260px] p-[24px] rounded-[8px] shadow-[0_4px_8px_0_rgba(0,42,59,0.08)] transition-all duration-300 ease-in-out hover:h-[280px]">
              <div className="image-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  className=" group-hover:scale-105 transition-all duration-300 ease-in-out"
                  width={22}
                  height={22}
                />
              </div>
              <h3 className=" text-xl text-orange font-semibold mb-2 mt-4">
                {item.title}
              </h3>
              <p className="text-orange mb-4 opacity-0 invisible h-0 group-hover:opacity-100 group-hover:visible group-hover:h-[280px] transition-all duration-300 ease-in-out">
                {item.description}
              </p>
            </div>
            ))}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrangeColWrap;

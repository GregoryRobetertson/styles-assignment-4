import React from 'react';
import Cards from './Cards';

export default function Dashboard() {
  const foodData = [
    {
      name: 'Pasta',
      desc: "Pasta, a beloved staple of Italian cuisine, is known for its versatility in shape and sauce pairing, cherished worldwide for its comforting texture and rich flavor profile.",
      img: 'images/pasta.png'
    },
    {
      name: 'Red Beans',
      desc: "Red beans, a staple in many cuisines, are prized for their creamy texture and earthy flavor, often used in soups, stews, and rice dishes.",
      img: 'images/redbeans.png'
    },
    {
      name: 'Jambalaya',
      desc: "Jambalaya, a Creole dish from Louisiana, is a flavorful one-pot meal featuring a mix of rice, meats, seafood, and spices, reflecting the region's diverse culinary influences.",
      img: 'images/jambalaya.png'
    },
    {
      name: 'Lasagna',
      desc: "Lasagna, an Italian classic, is a layered pasta dish filled with rich tomato sauce, creamy cheese, and savory meats, baked to perfection for a hearty and satisfying meal.",
      img: 'images/lasagna.png'
    },
    {
      name: 'Tacos',
      desc: "Tacos, a beloved Mexican street food, consist of soft or crispy tortillas filled with flavorful ingredients such as seasoned meats, fresh vegetables, cheese, and salsa, offering a delicious handheld meal.",
      img: 'images/tacos.png'
    },
    {
      name: 'Steak',
      desc: "Steak, a favorite among meat lovers, is prized for its juicy tenderness and robust flavor, often seasoned and grilled to perfection, served alongside hearty sides for a satisfying dining experience.",
      img: 'images/steak.png'
    }
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5 mx-5 m-20">
      {foodData.map((food, index) => (
        <div key={index}>
          <Cards
            img={food.img}
            foodName={food.name}
            desc={food.desc}
          />
        </div>
      ))}
    </section>
  );
}

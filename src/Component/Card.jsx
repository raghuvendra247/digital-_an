import React from "react";

const cards = [
  {
    title: "Card 1",
    description: "This is the first card description.",
    image: "https://thumbs.dreamstime.com/b/spring-wallpaper-creating-award-winning-photograph-pic-encapsulates-timeless-beauty-tranquility-nature-351384930.jpg",
  },
  {
    title: "Card 2",
    description: "This is the second card description.",
    image: "https://thumbs.dreamstime.com/b/spring-wallpaper-creating-award-winning-photograph-pic-encapsulates-timeless-beauty-tranquility-nature-351384024.jpg",
  },
  {
    title: "Card 3",
    description: "This is the third card description.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OXG43icC6A_dyDxX_RHTS3WRM0Lg8SEL8Q&s",
  },
];

function CardGrid() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover hover:scale-95 transition duration-300"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;

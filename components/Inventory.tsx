import { useState } from "react";

const Inventory = () => {
  const [showMore, setShowMore] = useState(false);

  const Cars = [
    {
      image: "dodge-charger.png",
      title: "Dodge Charger",
      year: "2018",
      hp: "700",
      transmission: "Autom.",
      transform: true,
    },
    {
      image: "mercedes-e-class.png",
      title: "Mercedes E class",
      year: "2016",
      hp: "300",
      transmission: "Autom.",
      transform: true,
    },
    {
      image: "volkswagen-passat.png",
      title: "Volkswagen Passat",
      year: "2009",
      hp: "210",
      transmission: "Manual",
      transform: true,
    },
    {
      image: "toyota-corolla.png",
      title: "Toyota Corolla",
      year: "2017",
      hp: "190",
      transmission: "Autom.",
      transform: false,
    },
    {
      image: "audi-rs7.png",
      title: "Audi RS7",
      year: "2010",
      hp: "400",
      transmission: "Manual",
      transform: true,
    },
    {
      image: "chevrolet-cruze.png",
      title: "Chevrolet Cruze",
      year: "2012",
      hp: "180",
      transmission: "Autom.",
      transform: true,
    },
    {
      image: "dodge-charger.png",
      title: "Dodge Charger",
      year: "2018",
      hp: "700",
      transmission: "Autom.",
      transform: true,
    },
    {
      image: "mercedes-e-class.png",
      title: "Mercedes E class",
      year: "2016",
      hp: "300",
      transmission: "Autom.",
      transform: true,
    },
    {
      image: "volkswagen-passat.png",
      title: "Volkswagen Passat",
      year: "2009",
      hp: "210",
      transmission: "Manual",
      transform: true,
    },
  ];

  return (
    <section id="inventory">
      <div id="title">
        <span className="text-orange">latest</span> inventory
      </div>
      <div id="items">
        {Cars.slice(0, showMore ? Cars.length : 6).map((car, i) => (
          <div key={i} className="car">
            <div
              className={`car-image ${
                car.transform ? "transform-car-img" : ""
              }`}
            >
              <img src={`/cars/${car.image}`} />
            </div>
            <div className="car-title">{car.title}</div>
            <div className="car-props">
              <div>{car.year}</div>
              <div>{car.hp} HP</div>
              <div>{car.transmission}</div>
            </div>
            <div className="car-book">
              <a href="/#">book now</a>
            </div>
          </div>
        ))}
      </div>
      {showMore ? (
        <></>
      ) : (
        <div id="show-more-button">
          <button
            onClick={() => {
              setShowMore(true);
            }}
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Inventory;

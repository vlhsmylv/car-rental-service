import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { TbDiamond } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { MdCancel } from "react-icons/md";

const WhyChooseUs = () => {
  const Why = [
    {
      icon: <BsFillTelephoneFill />,
      title: "Customer Support",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam deleniti autem, sit fugit.",
    },
    {
      icon: <FaLocationArrow />,
      title: "Location",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam deleniti autem, sit fugit.",
    },
    {
      icon: <ImPriceTag />,
      title: "Best Price",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam deleniti autem, sit fugit.",
    },
    {
      icon: <TbDiamond />,
      title: "Experienced drivers",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam deleniti autem, sit fugit.",
    },
    {
      icon: <MdVerifiedUser />,
      title: "Verified Car Brand",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam deleniti autem, sit fugit.",
    },
    {
      icon: <MdCancel />,
      title: "Free Cancelation",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam deleniti autem, sit fugit.",
    },
  ];

  return (
    <section id="why-choose-us">
      <div id="title">
        why <span className="text-orange">choose us</span>
      </div>
      <div id="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ut
        accusantium saepe! Reiciendis provident quisquam ullam, illo quas
        dolores. Debitis ut accusantium saepe! Reiciendis provident.
      </div>
      <div id="why">
        <div id="left">
          <img src="/cars/porschee-cayenne.png" />
        </div>
        <div id="right">
          {Why.map((w, i) => (
            <div className="why" key={i}>
              <div className="left">{w.icon}</div>
              <div className="right">
                <div className="title">{w.title}</div>
                <div className="desc">{w.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

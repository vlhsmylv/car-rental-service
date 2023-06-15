import { BsTelephoneFill, BsPersonCircle } from "react-icons/bs";
import { IoLocationSharp, IoMailSharp } from "react-icons/io5";

const Contact = () => {
  const ContactInfos = [
    {
      icon: <BsTelephoneFill />,
      text: "123 456 789",
      desc: "Call Us",
    },
    {
      icon: <IoLocationSharp />,
      text: "Baku, Azerbaijan",
      desc: "You can approach us",
    },
    {
      icon: <IoMailSharp />,
      text: "contact@rent-a-ride.com",
      desc: "Contact with us via email",
    },
    {
      icon: <BsPersonCircle />,
      text: "hr@rent-a-ride.com",
      desc: "Advance your career cawith Rent a Ride",
    },
  ];

  return (
    <section id="contact">
      <div id="title">
        Contact <span className="text-orange">Us</span>
      </div>
      <div id="interaction">
        <div id="contact-infos">
          {ContactInfos.map((info, i) => (
            <div className="contact-info" key={i}>
              <div className="left">{info.icon}</div>
              <div className="right">
                <div className="title"> {info.text}</div>
                <div className="desc">{info.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div id="interactive">
          <form onSubmit={(e: any) => e.preventDefault()}>
            <div className="title">
              Ask Your <span className="text-orange">Question</span>
            </div>
            <div className="form-group">
              <div className="title">Your Name</div>
              <div className="input-cont">
                <input type="text" placeholder="Enter your name..." />
              </div>
            </div>
            <div className="form-group">
              <div className="title">Your Question</div>
              <div className="input-cont">
                <input type="text" placeholder="Enter your question..." />
              </div>
            </div>
            <div className="form-group">
              <div className="title">Detailed information</div>
              <div className="input-cont">
                <textarea rows={5} placeholder="Enter detailed information for your question..." />
              </div>
            </div>
            <div className="form-group form-group-with-button">
              <button>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

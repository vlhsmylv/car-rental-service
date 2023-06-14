import { FaGoogle, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const Data = {
    create: [
      {
        title: "Sign in",
        url: "/#",
      },
      {
        title: "About Us",
        url: "/#",
      },
      {
        title: "Pricing",
        url: "/#",
      },
    ],
    resource: [
      {
        title: "Community",
        url: "/#",
      },
      {
        title: "Become a partner",
        url: "/#",
      },
      {
        title: "Our technology",
        url: "/#",
      },
    ],
    support: [
      {
        title: "Contact Us",
        url: "/#",
      },
      {
        title: "Terms of use",
        url: "/#",
      },
      {
        title: "Privacy and policy",
        url: "/#",
      },
    ],
  };

  return (
    <footer>
      <div id="main">
        <div id="logo">Rent a Ride</div>
        <div id="create" className="link-set">
          <div className="title">Create Free Account</div>
          <div className="links">
            {Data.create.map((link, i) => (
              <div className="link-container" key={i}>
                <a href={link.url}>{link.title}</a>
              </div>
            ))}
          </div>
        </div>
        <div id="resources" className="link-set">
          <div className="title">Resources</div>
          <div className="links">
            {Data.resource.map((link, i) => (
              <div className="link-container" key={i}>
                <a href={link.url}>{link.title}</a>
              </div>
            ))}
          </div>
        </div>
        <div id="support" className="link-set">
          <div className="title">Support</div>
          <div className="links">
            {Data.support.map((link, i) => (
              <div className="link-container" key={i}>
                <a href={link.url}>{link.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="bottom">
        <div id="credits">
          2023{" "}
          <a target="_blank" href="https://lightbox-agency.netlify.com">
            Lightbox
          </a>{" "}
          Agency. All rights reserved.
        </div>
        <div id="social">
          <div className="social-box">
            <a href="/#" target="_blank">
              <FaGoogle />
            </a>
          </div>
          <div className="social-box">
            <a href="/#" target="_blank">
              <FaTwitter />
            </a>
          </div>
          <div className="social-box">
            <a href="/#" target="_blank">
              <AiOutlineInstagram/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

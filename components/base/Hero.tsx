import { BiTargetLock } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

const Hero = () => {
  return (
    <main id="hero">
      <div id="hero-main">
        <div id="hero-text">
          <div id="header">
            <span className="text-orange" id="huge">
              easy
            </span>{" "}
            and fast way to rent your car
          </div>
          <div id="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil at facilis atque voluptatem? Ab minus inventore aut deleniti! Nihil perferendis porro harum aut laudantium odio blanditiis sed labore omnis?</div>
        </div>
        <div id="hero-img">
            <div id="bg-item"></div>
          <img src="/cars/bmw.png" />
        </div>
      </div>
      <div id="interaction">
        <div id="buttons">
          <div id="get-started">
            <a href="/#">Get started</a>
          </div>
          <div id="learn-more">
            <a href="/#">Learn more</a>
          </div>
        </div>
        <div id="app">
          <div id="left">
            <div>Pick up location</div>
            <div>
              <button>
                Current location{" "}
                <span className="text-orange">
                  <BiTargetLock />
                </span>
              </button>
            </div>
          </div>
          <div id="right">
            <div>Drop off location</div>
            <div>
              <button>
                Drop off location{" "}
                <span className="text-orange">
                  <ImLocation />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;

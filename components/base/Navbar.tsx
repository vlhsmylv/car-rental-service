import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const NavItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Why Choose us",
      to: "/why-choose-us",
    },
    {
      title: "About us",
      to: "/about-us",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else if (window.scrollY === 0) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBg);
    }
  }, []);

  const Navigation = ({ currentlyMobile }: any) => {
    return (
      <div id={currentlyMobile ? "navigation-mobile" : "navigation"}>
        {NavItems.map((item, i) => (
          <div key={i}>
            <a
              href={item.to}
              className={currentPath === item.to ? "active" : ""}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    );
  };
  const UserInteraction = ({ currentlyMobile }: any) => {
    return (
      <div
        id={currentlyMobile ? "user-interaction-mobile" : "user-interaction"}
      >
        <div id="login-button">
          <a href="/login">Login</a>
        </div>
        <div id="sign-up-button">
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    );
  };

  return (
    <nav className={navbar ? "nav-active" : ""}>
      <div id="logo"><a href="/">Rent a Ride</a> </div>
      <Navigation currentlyMobile={false} />
      <UserInteraction currentlyMobile={false} />
      <div id="mobile">
        {mobile ? (
          <div id="offcanvas-menu">
            <button
              onClick={() => {
                setMobile(false);
              }}
              id="close-mobile-menu"
            >
              <GrClose />
            </button>
            <Navigation currentlyMobile={true} />
            <UserInteraction currentlyMobile={true} />
          </div>
        ) : (
          <button
            onClick={() => {
              setMobile(true);
            }}
            id="open-mobile-menu"
          >
            <CiMenuFries />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

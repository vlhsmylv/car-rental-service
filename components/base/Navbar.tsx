import { useEffect, useState } from "react";

const Navbar = () => {
  const NavItems = [
    {
      title: "Home",
      to: "/#",
    },
    {
      title: "Why Choose us",
      to: "/#",
    },
    {
      title: "About us",
      to: "/#",
    },
    {
      title: "Contact",
      to: "/#",
    },
  ];

  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if(window.scrollY >= 100) {
        setNavbar(true);
    } else if(window.scrollY === 0) {
        setNavbar(false);
    }
  }

  useEffect(() => {
    if(typeof window !== "undefined") {
        window.addEventListener("scroll", changeBg);
    }
  }, [])

  return (
    <nav className={navbar ? "nav-active" : ""}>
      <div id="logo">
        Rent a Ride
      </div>
      <div id="navigation">
        {NavItems.map((item, i) => (
          <div key={i}>
            <a
              href={item.to}
              className={item.title.toLowerCase() === "home" ? "active" : ""}
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
      <div id="user-interaction">
        <div id="login-button">
          <a href="/#">Login</a>
        </div>
        <div id="sign-up-button"><a href="/#">Sign Up</a></div>
      </div>
    </nav>
  );
};

export default Navbar;

import type { ReactElement } from "react";
import classes from "./Header.module.css";
import Banner from "./Banner";
import MainNavBar from "./MainNavBar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import MenuNavBar from "./MenuNavBar";

export default function Header(): ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    function handleScroll() {
      // 8.3571rem × 16px
      if (window.scrollY > 134) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.container} ${scrolled ? classes.scrolled : ""}`}
    >
      <Banner />

      <MainNavBar />

      {location.pathname === "/menu" && <MenuNavBar />}
    </header>
  );
}

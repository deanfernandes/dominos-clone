import type { ReactElement } from "react";
import classes from "./Header.module.css";
import Banner from "./Banner";
import MainNavBar from "./MainNavBar";

export default function Header(): ReactElement {
  return (
    <header className={classes.container}>
      <Banner />

      <MainNavBar />
    </header>
  );
}

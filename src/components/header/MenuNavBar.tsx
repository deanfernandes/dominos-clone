import classes from "./MenuNavBar.module.css";

export default function MenuNavBar() {
  return (
    <nav className={classes.menu_nav_bar_container}>
      <a
        href="#pizza"
        className={classes.menu_nav_bar_link}
        title="Subcategory navigation"
      >
        Pizza
      </a>
      <a
        href="#sides"
        className={classes.menu_nav_bar_link}
        title="Subcategory navigation"
      >
        Sides
      </a>
      <a
        href="#desserts"
        className={classes.menu_nav_bar_link}
        title="Subcategory navigation"
      >
        Desserts
      </a>
      <a
        href="#drinks"
        className={classes.menu_nav_bar_link}
        title="Subcategory navigation"
      >
        Drinks
      </a>
      {/*
      <a
        href="#lunch-wraps"
        className={classes.menu_nav_bar_link}
        title="Subcategory navigation"
      >
        Lunch & Wraps
      </a>
       */}
    </nav>
  );
}

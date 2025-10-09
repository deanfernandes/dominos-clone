import classes from "./MenuBanner.module.css";
import menuBanner from "../../assets/menu_banner.webp";

export default function MenuBanner() {
  return (
    <div className={classes.menu_banner_container}>
      <a href="#pizzas" className={classes.banner_link}>
        <picture>
          <source srcSet={menuBanner} type="image/webp" />
          <img src={menuBanner} alt="banner for pizza" />
        </picture>
      </a>
      <p className={classes.recommendation}>
        Adults need around 2000kcal per day
      </p>
    </div>
  );
}

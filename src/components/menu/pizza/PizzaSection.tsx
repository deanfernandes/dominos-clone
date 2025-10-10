import pizzaBanner from "../../../assets/pizza_banner.webp";
import CustomizePizzaGrid from "./CustomizePizzaGrid";
import classes from "./PizzaSection.module.css";
import SpecialityPizzasGrid from "./SpecialityPizzasGrid";

export default function PizzaSection() {
  return (
    <section className={classes.container}>
      <h1 id="pizza">Pizza</h1>
      <div className={classes.banner_container}>
        <a href="#pizza">
          <img src={pizzaBanner} alt="Pizza Banner" />
        </a>
      </div>
      <CustomizePizzaGrid />
      <SpecialityPizzasGrid />
    </section>
  );
}

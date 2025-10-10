import pizzaBanner from "../../assets/pizza_banner.webp";
import CustomizePizzaGrid from "./CustomizePizzaGrid";

export default function PizzaSection() {
  return (
    <section>
      <h1>Pizza</h1>
      <div>
        <a href="#pizza">
          <img src={pizzaBanner} alt="Pizza Banner" />
        </a>
      </div>
      <CustomizePizzaGrid />
    </section>
  );
}

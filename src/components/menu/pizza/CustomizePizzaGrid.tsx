import CustomizePizzaCard from "./CustomizePizzaCard";
import createYourOwn from "../../../assets/create_your_own.svg";
import halfAndHalf from "../../../assets/half_and_half.svg";
import classes from "./CustomizePizzaGrid.module.css";
import MenuHeader from "../MenuHeader";

export default function CustomizePizzaGrid() {
  return (
    <div className={classes.container}>
      <MenuHeader text="Your Pizza, Your Way" />
      <div className={classes.cards_container}>
        <CustomizePizzaCard
          imgUrl={createYourOwn}
          title="Create Your Own From £8.99"
          description="Choose from a selection of delicious toppings to create your own pizza."
          background="radial-gradient(ellipse 70% 80% at 50% 40%,#009dc4 0%,#006491 100%)"
        />
        <CustomizePizzaCard
          imgUrl={halfAndHalf}
          title="Half & Half From £18.99"
          description="Torn between two pizzas? Why not have both of them? 2 sides, one base."
          background="radial-gradient(ellipse 70% 80% at 50% 40%,#e31837 0%,#900016 100%)"
        />
      </div>
    </div>
  );
}

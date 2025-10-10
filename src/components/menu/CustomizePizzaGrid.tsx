import CustomizePizzaCard from "./CustomizePizzaCard";
import createYourOwn from "../../assets/create_your_own.svg";
import halfAndHalf from "../../assets/half_and_half.svg";

export default function CustomizePizzaGrid() {
  return (
    <div>
      <h2>Your Pizza, Your Way</h2>
      <CustomizePizzaCard
        imgUrl={createYourOwn}
        title="Create Your Own From £8.99"
        description="Choose from a selection of delicious toppings to create your own pizza."
      />
      <CustomizePizzaCard
        imgUrl={halfAndHalf}
        title="Half & Half From £18.99"
        description="Torn between two pizzas? Why not have both of them? 2 sides, one base."
      />
    </div>
  );
}

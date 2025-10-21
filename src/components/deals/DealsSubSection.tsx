import SubSectionHeader from "../SubSectionHeader";
import FilterBar from "./FilterBar";
import classes from "./DealsSubSection.module.css";
import type { Deal } from "../../types/Deal";
import DealsGrid from "./DealsGrid";
import homeAloneImg from "../../assets/deals/home_alone.png";
import priceSliceImg from "../../assets/deals/price_slice.png";
import wrapImg from "../../assets/deals/wrap.png";
import bodgofImg from "../../assets/deals/bodgof.png";

export const deals: Deal[] = [
  {
    id: 1,
    imgUrl: priceSliceImg,
    title: "2 Large Pizzas £26",
    description: "2 Large Pizzas for £26. T&Cs apply.",
    types: ["pizza"],
  },
  {
    id: 2,
    imgUrl: priceSliceImg,
    title: "2 Medium Pizzas £22",
    description: "2 Medium Pizzas for £22. T&Cs apply.",
    types: ["pizza"],
  },
  {
    id: 3,
    imgUrl: bodgofImg,
    title: "Buy One Dessert Get One Free * Delivery & Collection *",
    description:
      "Buy one dessert and get another free. (Excludes ice cream) Delivery and Collection. T&Cs apply.",
    types: ["dessert"],
  },
  {
    id: 4,
    imgUrl: homeAloneImg,
    title: "Home Alone Deal from £15.99",
    description:
      "Small pizza, choice of side & a small bottle of drink from £15.99. Choose a pizza from the set menu or create your own with up to 3 toppings. T&Cs apply.",
    types: ["pizza", "side"],
  },
  {
    id: 5,
    imgUrl: wrapImg,
    title: "All Day Wrap & Fries for £6",
    description:
      "Choose a hot & cheesy wrap and a portion of fries for only £6. T&Cs apply.",
    types: ["side"],
  },
];

export default function DealsSubSection() {
  return (
    <section className={classes.container}>
      <SubSectionHeader text="Collect Deals" />

      <FilterBar />

      <DealsGrid deals={deals} />
    </section>
  );
}

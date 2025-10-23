import SubSectionHeader from "../SubSectionHeader";
import FilterBar, { type SortBy } from "./FilterBar";
import classes from "./DealsSubSection.module.css";
import type { Deal } from "../../types/Deal";
import DealsGrid from "./DealsGrid";
import homeAloneImg from "../../assets/deals/home_alone.png";
import priceSliceImg from "../../assets/deals/price_slice.png";
import wrapImg from "../../assets/deals/wrap.png";
import bodgofImg from "../../assets/deals/bodgof.png";
import { useState } from "react";
import type { MenuItemType } from "../../types/MenuItem";

export const deals: Deal[] = [
  {
    id: 1,
    imgUrl: priceSliceImg,
    title: "2 Large Pizzas £26",
    description: "2 Large Pizzas for £26. T&Cs apply.",
    types: ["pizza"],
    popularity: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 2,
    imgUrl: priceSliceImg,
    title: "2 Medium Pizzas £22",
    description: "2 Medium Pizzas for £22. T&Cs apply.",
    types: ["pizza"],
    popularity: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 3,
    imgUrl: bodgofImg,
    title: "Buy One Dessert Get One Free * Delivery & Collection *",
    description:
      "Buy one dessert and get another free. (Excludes ice cream) Delivery and Collection. T&Cs apply.",
    types: ["dessert"],
    popularity: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 4,
    imgUrl: homeAloneImg,
    title: "Home Alone Deal from £15.99",
    description:
      "Small pizza, choice of side & a small bottle of drink from £15.99. Choose a pizza from the set menu or create your own with up to 3 toppings. T&Cs apply.",
    types: ["pizza", "side"],
    popularity: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 5,
    imgUrl: wrapImg,
    title: "All Day Wrap & Fries for £6",
    description:
      "Choose a hot & cheesy wrap and a portion of fries for only £6. T&Cs apply.",
    types: ["side"],
    popularity: Math.floor(Math.random() * 100) + 1,
  },
];

export default function DealsSubSection() {
  const [selectedFilters, setSelectedFilters] = useState<MenuItemType[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>(null);

  const toggleFilter = (filter: MenuItemType) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredDeals =
    selectedFilters.length === 0
      ? deals
      : deals.filter((deal) =>
          deal.types.some((type) => selectedFilters.includes(type))
        );

  const sortedDeals = [...filteredDeals].sort((a, b) => {
    switch (sortBy) {
      case "ascending":
        return a.title.localeCompare(b.title);

      case "descending":
        return b.title.localeCompare(a.title);

      case "popularity":
        return b.popularity - a.popularity;

      default:
        return 0;
    }
  });

  return (
    <section className={classes.container}>
      <SubSectionHeader text="Collect Deals" />

      <FilterBar
        selectedFilters={selectedFilters}
        onToggleFilter={toggleFilter}
        numberOfDeals={filteredDeals.length}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <DealsGrid
        deals={sortedDeals}
        clearFilters={() => setSelectedFilters([])}
      />
    </section>
  );
}

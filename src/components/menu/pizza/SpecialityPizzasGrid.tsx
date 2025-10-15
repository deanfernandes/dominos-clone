import MenuHeader from "../MenuHeader";
import MenuItemCard from "../MenuItemCard";
import classes from "./SpecialityPizzasGrid.module.css";
import DietaryTagBar from "../dietary/DietaryTagBar";
import type { MenuItem } from "../../../types/MenuItem";
import indianGunpowderChicken from "../../../assets/menu/pizza/indian_gunpowder_chicken.webp";
import ultimateMasalaPaneer from "../../../assets/menu/pizza/ultimate_masala_paneer.webp";
import pepperoniPassion from "../../../assets/menu/pizza/pepperoni_passion.webp";
import cheeseAndTomato from "../../../assets/menu/pizza/cheese_and_tomato.webp";

const menuItems: MenuItem[] = [
  {
    name: "The Ultimate Gunpowder Chicken",
    description:
      "Indian-spiced pulled chicken, green & red peppers, green jalapeños, red onion and mozzarella on our signature tomato sauce base, topped with an extra sprinkle of our gunpowder spice blend.",
    imgUrl: indianGunpowderChicken,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: true,
    calories: 1905,
    minServes: 3,
    maxServes: 4,
  },
  {
    name: "The Ultimate Masala Paneer",
    description:
      "Spiced paneer with mixed peppers, red onions, and masala sauce, finished with mozzarella cheese.",
    imgUrl: ultimateMasalaPaneer,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: true,
    calories: 2089,
    minServes: 3,
    maxServes: 4,
  },
  {
    name: "Pepperoni Passion®",
    description:
      "Double pepperoni and double mozzarella cheese on a classic tomato base.",
    imgUrl: pepperoniPassion,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 2642,
    minServes: 3,
    maxServes: 4,
  },
  {
    name: "Original Cheese & Tomato",
    description:
      "Classic combination of mozzarella and tomato sauce on a freshly made base.",
    imgUrl: cheeseAndTomato,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 2171,
    minServes: 3,
    maxServes: 4,
  },
];

export default function SpecialityPizzasGrid() {
  return (
    <div className={classes.container}>
      <MenuHeader text="Speciality Pizzas" />

      <DietaryTagBar />

      <div className={classes.grid}>
        {menuItems.map((m) => (
          <MenuItemCard key={m.name} menuItem={m} />
        ))}
      </div>
    </div>
  );
}

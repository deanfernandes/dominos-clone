import MenuBanner from "../components/menu/MenuBanner.tsx";
import AllergyAccordian from "../components/menu/allergy/AllergyAccordian.tsx";
import MenuSection from "../components/menu/MenuSection.tsx";
import pizzaBanner from "../assets/menu/pizza_banner.webp";
import MenuSubSection from "../components/menu/MenuSubSection.tsx";
import indianGunpowderChicken from "../assets/menu/pizza/indian_gunpowder_chicken.webp";
import ultimateMasalaPaneer from "../assets/menu/pizza/ultimate_masala_paneer.webp";
import pepperoniPassion from "../assets/menu/pizza/pepperoni_passion.webp";
import cheeseAndTomato from "../assets/menu/pizza/cheese_and_tomato.webp";
import type { MenuItem } from "../types/MenuItem.ts";
import glutenFreeCheeseTomato from "../assets/menu/pizza/gluten_free/cheese_and_tomato.webp";
import glutenFreePepperoniPassion from "../assets/menu/pizza/gluten_free/pepperoni_passion.webp";
import newYorker from "../assets/menu/pizza/gluten_free/new_yorker.webp";
import texasBbq from "../assets/menu/pizza/gluten_free/texas_bbq.webp";
import vegiSupreme from "../assets/menu/pizza/gluten_free/vegi_supreme.webp";

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

const glutenFreePizzas: MenuItem[] = [
  {
    name: "Gluten Free Cheese & Tomato",
    description: "",
    imgUrl: glutenFreeCheeseTomato,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: true,
    isSpicy: false,
    calories: 677,
    minServes: 1,
    maxServes: 2,
  },
  {
    name: "Gluten Free Pepperoni Passion®",
    description: "",
    imgUrl: glutenFreePepperoniPassion,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: true,
    isSpicy: false,
    calories: 953,
    minServes: 1,
    maxServes: 2,
  },
  {
    name: "Gluten Free Vegi Supreme",
    description: "",
    imgUrl: vegiSupreme,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: true,
    isSpicy: false,
    calories: 607,
    minServes: 1,
    maxServes: 2,
  },
  {
    name: "Gluten Free Texas BBQ®",
    description: "",
    imgUrl: texasBbq,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: true,
    isSpicy: false,
    calories: 775,
    minServes: 1,
    maxServes: 2,
  },
  {
    name: "Gluten Free New Yorker",
    description: "",
    imgUrl: newYorker,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: true,
    isSpicy: false,
    calories: 829,
    minServes: 1,
    maxServes: 2,
  },
];

export default function Menu() {
  return (
    <div>
      <MenuBanner />
      <AllergyAccordian />
      <MenuSection
        heading="Pizza"
        bannerImgUrl={pizzaBanner}
        bannerImgAlt="Freshly baked 'Ultimate Indian Feast' pizza"
      >
        <MenuSubSection heading="Speciality Pizzas" menuItems={menuItems} />
        <MenuSubSection heading="Gluten Free" menuItems={glutenFreePizzas} />
      </MenuSection>
    </div>
  );
}

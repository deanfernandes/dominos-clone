import MenuBanner from "../components/menu/MenuBanner.tsx";
import AllergyAccordian from "../components/menu/allergy/AllergyAccordian.tsx";
import MenuSection from "../components/menu/MenuSection.tsx";
import pizzaBanner from "../assets/menu/pizza_banner.webp";
import MenuSubSection from "../components/menu/MenuSubSection.tsx";
import type { MenuItem } from "../types/MenuItem.ts";
import indianGunpowderChicken from "../assets/menu/pizza/indian_gunpowder_chicken.webp";
import ultimateMasalaPaneer from "../assets/menu/pizza/ultimate_masala_paneer.webp";
import pepperoniPassion from "../assets/menu/pizza/pepperoni_passion.webp";
import cheeseAndTomato from "../assets/menu/pizza/cheese_and_tomato.webp";
import glutenFreeCheeseTomato from "../assets/menu/pizza/gluten_free/cheese_and_tomato.webp";
import glutenFreePepperoniPassion from "../assets/menu/pizza/gluten_free/pepperoni_passion.webp";
import newYorker from "../assets/menu/pizza/gluten_free/new_yorker.webp";
import texasBbq from "../assets/menu/pizza/gluten_free/texas_bbq.webp";
import vegiSupreme from "../assets/menu/pizza/gluten_free/vegi_supreme.webp";
import margheriTastic from "../assets/menu/pizza/plant_based/margheri_tastic.webp";
import margheriTasticItalian from "../assets/menu/pizza/plant_based/margheri_tastic_italian_style.webp";
import plantBasedVegiSupreme from "../assets/menu/pizza/plant_based/vegi_supreme.webp";
import plantBasedVegiSupremeItalian from "../assets/menu/pizza/plant_based/vegi_supreme_italian.webp";
import bbqChickenAndBacon from "../assets/menu/pizza/cheeky_little_pizzas/bbq_chicken_and_bacon.webp";
import clpCheeseAndTomato from "../assets/menu/pizza/cheeky_little_pizzas/cheese_tomato.webp";
import clpPepperoniPassion from "../assets/menu/pizza/cheeky_little_pizzas/pepperoni_passion.webp";
import sausageBacon from "../assets/menu/pizza/cheeky_little_pizzas/sausage_bacon.webp";
import clpVegiSupreme from "../assets/menu/pizza/cheeky_little_pizzas/vegi_supreme.webp";

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
const plantBasedPizzas: MenuItem[] = [
  {
    name: "Plant-Based Margheri-tastic - Medium",
    description: "",
    imgUrl: margheriTastic,
    isVegetarian: true,
    isPlantBased: true,
    isGlutenFree: false,
    isSpicy: false,
    calories: 1365,
    minServes: 2,
    maxServes: 3,
  },
  {
    name: "Plant-Based Margheri-tastic - Large",
    description: "",
    imgUrl: margheriTasticItalian,
    isVegetarian: true,
    isPlantBased: true,
    isGlutenFree: false,
    isSpicy: false,
    calories: 1449,
    minServes: 3,
    maxServes: 4,
  },
  {
    name: "Plant-Based Vegi Supreme - Medium",
    description: "",
    imgUrl: plantBasedVegiSupreme,
    isVegetarian: true,
    isPlantBased: true,
    isGlutenFree: false,
    isSpicy: false,
    calories: 1373,
    minServes: 2,
    maxServes: 3,
  },
  {
    name: "Plant-Based Vegi Supreme - Large",
    description: "",
    imgUrl: plantBasedVegiSupremeItalian,
    isVegetarian: true,
    isPlantBased: true,
    isGlutenFree: false,
    isSpicy: false,
    calories: 1486,
    minServes: 3,
    maxServes: 4,
  },
];
const cheekyLittlePizzas: MenuItem[] = [
  {
    name: "Cheeky Little Pizza - Pepperoni",
    description: "",
    imgUrl: clpPepperoniPassion,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 571,
    minServes: 1,
    maxServes: 1,
  },
  {
    name: "Cheeky Little Pizza - BBQ, Chicken & Bacon",
    description: "",
    imgUrl: bbqChickenAndBacon,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 594,
    minServes: 1,
    maxServes: 1,
  },
  {
    name: "Cheeky Little Pizza - Vegi Classic",
    description: "",
    imgUrl: clpVegiSupreme,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 495,
    minServes: 1,
    maxServes: 1,
  },
  {
    name: "Cheeky Little Pizza - Cheese & Tomato",
    description: "",
    imgUrl: clpCheeseAndTomato,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 535,
    minServes: 1,
    maxServes: 1,
  },
  {
    name: "Cheeky Little Pizza - Sausage & Bacon",
    description: "",
    imgUrl: sausageBacon,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 541,
    minServes: 1,
    maxServes: 1,
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
        <MenuSubSection
          heading="Plant-based Pizzas"
          menuItems={plantBasedPizzas}
        />
        <MenuSubSection
          heading="Cheeky Little Pizzas"
          menuItems={cheekyLittlePizzas}
        />
      </MenuSection>
    </div>
  );
}

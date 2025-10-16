import MenuBanner from "../components/menu/MenuBanner.tsx";
import AllergyAccordian from "../components/menu/allergy/AllergyAccordian.tsx";
import MenuSection from "../components/menu/MenuSection.tsx";
import MenuSubSection from "../components/menu/MenuSubSection.tsx";
import type {
  PizzaItem,
  SideItem,
  DessertItem,
  DrinkItem,
} from "../types/MenuItem.ts";
import pizzaBanner from "../assets/menu/pizza_banner.webp";
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
import sidesBanner from "../assets/menu/sides_banner.webp";
import sevenChickenStrips from "../assets/menu/sides/7_chicken_strips.webp";
import fourteenChickenStrips from "../assets/menu/sides/14_chicken_strips.webp";
import cheesyGarlicBread from "../assets/menu/sides/cheesy_garlic_bread.webp";
import fries from "../assets/menu/sides/fries.webp";
import garlicPizzaBread from "../assets/menu/sides/garlic_pizza_bread.webp";
import gunpowderChickenWings from "../assets/menu/sides/gunpowder_chicken_wings.webp";
import macNCheese from "../assets/menu/sides/mac_n_cheese.webp";
import potatoWedges from "../assets/menu/sides/potato_wedges.webp";
import dessertsBanner from "../assets/menu/desserts_banner.webp";
import chocCaramelCookie from "../assets/menu/desserts/choc_caramel_cookie.webp";
import chocDoughBalls from "../assets/menu/desserts/choc_dough_balls.webp";
import chocoPizza from "../assets/menu/desserts/choco_pizza.webp";
import cookies from "../assets/menu/desserts/cookies.webp";
import cocaColaClassic from "../assets/menu/drinks/coca_cola_classic.webp";
import dietCoke from "../assets/menu/drinks/diet_coke.webp";

const specialityPizzas: PizzaItem[] = [
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
    type: "pizza",
    createdAt: new Date().toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [
        { size: 'Large 13.5"', price: 25.99 },
        { size: 'Medium 11.5"', price: 23.99 },
        { size: 'Small 9.5"', price: 21.99 },
        { size: 'Personal 7"', price: 10.99 },
      ],
    },
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
    type: "pizza",
    createdAt: new Date().toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [
        { size: 'Large 13.5"', price: 25.99 },
        { size: 'Medium 11.5"', price: 23.99 },
        { size: 'Small 9.5"', price: 21.99 },
        { size: 'Personal 7"', price: 10.99 },
      ],
    },
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
    type: "pizza",
    createdAt: new Date().toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [
        { size: 'Large 13.5"', price: 25.99 },
        { size: 'Medium 11.5"', price: 23.99 },
        { size: 'Small 9.5"', price: 21.99 },
        { size: 'Personal 7"', price: 10.99 },
      ],
    },
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
    type: "pizza",
    createdAt: new Date().toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [
        { size: 'Large 13.5"', price: 25.99 },
        { size: 'Medium 11.5"', price: 23.99 },
        { size: 'Small 9.5"', price: 21.99 },
        { size: 'Personal 7"', price: 10.99 },
      ],
    },
  },
];
const glutenFreePizzas: PizzaItem[] = [
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
    type: "pizza",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Small 9.5"', price: 21.99 }],
    },
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
    type: "pizza",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Small 9.5"', price: 21.99 }],
    },
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
    type: "pizza",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Small 9.5"', price: 21.99 }],
    },
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
    type: "pizza",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Small 9.5"', price: 21.99 }],
    },
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
    type: "pizza",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Small 9.5"', price: 21.99 }],
    },
  },
];
const plantBasedPizzas: PizzaItem[] = [
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Medium 11.5"', price: 23.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Medium 11.5"', price: 23.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Medium 11.5"', price: 23.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Medium 11.5"', price: 23.99 }],
    },
  },
];
const cheekyLittlePizzas: PizzaItem[] = [
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Personal 7"', price: 10.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Personal 7"', price: 10.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Personal 7"', price: 10.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Personal 7"', price: 10.99 }],
    },
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
    type: "pizza",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "multi",
      sizePriceOptions: [{ size: 'Personal 7"', price: 10.99 }],
    },
  },
];

const sides: SideItem[] = [
  {
    name: "7 Gunpowder Chicken Wings",
    description: "Double up for £13.99",
    imgUrl: gunpowderChickenWings,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: true,
    calories: 494,
    minServes: 2,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "Garlic Pizza Bread",
    description: "Double up for £10.49",
    imgUrl: garlicPizzaBread,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 614,
    minServes: 2,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "Potato Wedges",
    description: "Double up for £10.49",
    imgUrl: potatoWedges,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 263,
    minServes: 2,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "The Ultimate Cheesy Garlic Bread",
    description: "Double up for £12.99",
    imgUrl: cheesyGarlicBread,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 834,
    minServes: 2,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "Fries",
    description: "",
    imgUrl: fries,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 518,
    minServes: 2,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "Mac 'n' Cheese",
    description: "Double up for £13.99",
    imgUrl: macNCheese,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 438,
    minServes: 1,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "7 Chicken Strippers®",
    description: "",
    imgUrl: sevenChickenStrips,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 436,
    minServes: 2,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
  {
    name: "14 Chicken Strippers®",
    description: "",
    imgUrl: fourteenChickenStrips,
    isVegetarian: false,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 871,
    minServes: 4,
    type: "side",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 7.99,
    },
  },
];

const desserts: DessertItem[] = [
  {
    name: "Double Choc & Caramel Cookies",
    description: "",
    imgUrl: chocCaramelCookie,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 668,
    minServes: 4,
    type: "dessert",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 6.99,
    },
  },
  {
    name: "Domino’s Cookies",
    description: "Double up for £10.49",
    imgUrl: cookies,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 694,
    minServes: 4,
    type: "dessert",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 6.99,
    },
  },
  {
    name: "Twisted Dough Balls® - Chocolate Cinnamon",
    description: "Double up for £10.99",
    imgUrl: chocDoughBalls,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 767,
    minServes: 2,
    type: "dessert",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 6.99,
    },
  },
  {
    name: "Lotta-chocca Pizza",
    description: "Double up for £10.99",
    imgUrl: chocoPizza,
    isVegetarian: true,
    isPlantBased: false,
    isGlutenFree: false,
    isSpicy: false,
    calories: 828,
    minServes: 4,
    type: "dessert",
    createdAt: "2025-10-02T00:00:00.000Z",
    pricing: {
      pricingType: "single",
      price: 6.99,
    },
  },
];

const drinks: DrinkItem[] = [
  {
    name: "Coca-Cola Classic",
    description: "Double up for £6.19",
    imgUrl: cocaColaClassic,
    type: "drink",
    createdAt: "2025-10-02T00:00:00.000Z",
    caloriesInfoLink: "https://www.coca-cola.co.uk/drinks/coca-cola/coca-cola",
    pricing: {
      pricingType: "single",
      price: 3.35,
    },
  },
  {
    name: "Diet Coke",
    description: "Double up for £5.49",
    imgUrl: dietCoke,
    type: "drink",
    createdAt: "2025-10-02T00:00:00.000Z",
    caloriesInfoLink: "https://www.coca-cola.co.uk/drinks/coca-cola/coca-cola",
    pricing: {
      pricingType: "single",
      price: 2.99,
    },
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
        id="pizza"
      >
        <MenuSubSection heading="Speciality Pizzas" items={specialityPizzas} />
        <MenuSubSection heading="Gluten Free" items={glutenFreePizzas} />
        <MenuSubSection heading="Plant-based Pizzas" items={plantBasedPizzas} />
        <MenuSubSection
          heading="Cheeky Little Pizzas"
          items={cheekyLittlePizzas}
        />
      </MenuSection>
      <MenuSection
        heading="Fancy A Bit On The Side?"
        bannerImgUrl={sidesBanner}
        bannerImgAlt="Delicious crispy chicken"
        id="sides"
      >
        <MenuSubSection items={sides} />
      </MenuSection>
      <MenuSection
        heading="Sweeten The Deal"
        bannerImgUrl={dessertsBanner}
        bannerImgAlt="Hot chocolate fudge cookie with caramel"
        id="desserts"
      >
        <MenuSubSection items={desserts} />
      </MenuSection>

      <MenuSection heading="Thirst Quenchers" bannerImgAlt="" id="drinks">
        <MenuSubSection items={drinks} />
      </MenuSection>
    </div>
  );
}

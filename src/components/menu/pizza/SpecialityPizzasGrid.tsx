import MenuHeader from "../MenuHeader";
import MenuItemCard from "../MenuItemCard";
import classes from "./SpecialityPizzasGrid.module.css";
import DietaryTagBar from "../dietary/DietaryTagBar";
import indianGunpowderChicken from "../../../assets/pizzas/indian_gunpowder_chicken.webp";

export default function SpecialityPizzasGrid() {
  return (
    <div className={classes.container}>
      <MenuHeader text="Speciality Pizzas" />

      <DietaryTagBar />

      <div>
        {/* TODO: map arr */}
        <MenuItemCard
          imgUrl={indianGunpowderChicken}
          isVegetarian={true}
          isPlantBased={true}
          isGlutenFree={true}
          isSpicy={true}
          title="The Ultimate Gunpowder Chicken"
          calories={1905}
          minServes={3}
          maxServes={4}
          description="Indian-spiced pulled chicken, green & red peppers, green jalapeños, red onion and mozzarella on our signature tomato sauce base, topped with an extra sprinkle of our gunpowder spice blend. 191kcal/800kJ per large slice / classic crust."
        />
      </div>
    </div>
  );
}

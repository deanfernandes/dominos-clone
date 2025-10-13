import MenuHeader from "../MenuHeader";
import MenuItemCard from "../MenuItemCard";
import classes from "./SpecialityPizzasGrid.module.css";
import DietaryTagBar from "../DietaryTagBar";

export default function SpecialityPizzasGrid() {
  return (
    <div className={classes.container}>
      <MenuHeader text="Speciality Pizzas" />

      <DietaryTagBar />

      <div>
        {/* TODO: map arr */}
        <MenuItemCard
          imgUrl=""
          isVegetarian={true}
          isPlantBased={true}
          isGlutenFree={true}
          isSpicy={true}
          title=""
          serving=""
        />
      </div>
    </div>
  );
}

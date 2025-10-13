import DietaryTag from "./DietaryTag";
import vegetarianIcon from "../../assets/dietary_icons/vegetarian.svg";
import plantBasedIcon from "../../assets/dietary_icons/plant_based.svg";
import glutenFreeIcon from "../../assets/dietary_icons/gluten_free.svg";
import spicyIcon from "../../assets/dietary_icons/spicy.svg";
import classes from "./DietaryTagBar.module.css";

export default function DietaryTagBar() {
  return (
    <div>
      <div className={classes.dietary_tags_container}>
        <ul>
          <li>
            <DietaryTag
              name="Vegetarian"
              iconUrl={vegetarianIcon}
              isButton={true}
            />
          </li>
          <li>
            <DietaryTag
              name="Plant-Based"
              iconUrl={plantBasedIcon}
              isButton={true}
            />
          </li>
          <li>
            <DietaryTag
              name="Gluten free"
              iconUrl={glutenFreeIcon}
              isButton={true}
            />
          </li>
          <li>
            <DietaryTag
              name="Hot & spicy"
              iconUrl={spicyIcon}
              isButton={false}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

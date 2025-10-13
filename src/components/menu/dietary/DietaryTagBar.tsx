import DietaryTag from "./DietaryTag";
import vegetarianIcon from "../../../assets/dietary_icons/vegetarian.svg";
import plantBasedIcon from "../../../assets/dietary_icons/plant_based.svg";
import glutenFreeIcon from "../../../assets/dietary_icons/gluten_free.svg";
import spicyIcon from "../../../assets/dietary_icons/spicy.svg";
import classes from "./DietaryTagBar.module.css";
import { useState } from "react";
import DietaryModal from "./DietaryModal";

export default function DietaryTagBar() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className={classes.dietary_tags_container}>
      <ul>
        <li>
          <DietaryTag
            name="Vegetarian"
            iconUrl={vegetarianIcon}
            onClick={() => setShowModal(true)}
          />
        </li>
        <li>
          <DietaryTag
            name="Plant-Based"
            iconUrl={plantBasedIcon}
            onClick={() => setShowModal(true)}
          />
        </li>
        <li>
          <DietaryTag
            name="Gluten free"
            iconUrl={glutenFreeIcon}
            onClick={() => setShowModal(true)}
          />
        </li>
        <li>
          <DietaryTag name="Hot & spicy" iconUrl={spicyIcon} />
        </li>
      </ul>

      {showModal && (
        <DietaryModal
          title="Vegetarian"
          content="OK for vegetarians, however please note that we do not have a dedicated preparation or cooking area in our stores for vegetarian food. Our stores are busy working environments & there is a risk of cross-contamination between toppings."
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

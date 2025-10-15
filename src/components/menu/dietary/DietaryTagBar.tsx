import DietaryTag from "./DietaryTag";
import vegetarianIcon from "../../../assets/menu/dietary/vegetarian.svg";
import plantBasedIcon from "../../../assets/menu/dietary/plant_based.svg";
import glutenFreeIcon from "../../../assets/menu/dietary/gluten_free.svg";
import spicyIcon from "../../../assets/menu/dietary/spicy.svg";
import classes from "./DietaryTagBar.module.css";
import { useState } from "react";
import DietaryModal from "./DietaryModal";

type ModalData = {
  title: string;
  content: React.ReactNode;
} | null;

export default function DietaryTagBar() {
  const [modalData, setModalData] = useState<ModalData>(null);

  return (
    <div className={classes.dietary_tags_container}>
      <ul>
        <li>
          <DietaryTag
            name="Vegetarian"
            iconUrl={vegetarianIcon}
            onClick={() =>
              setModalData({
                title: "Vegetarian",
                content:
                  "OK for vegetarians, however please note that we do not have a dedicated preparation or cooking area in our stores for vegetarian food. Our stores are busy working environments & there is a risk of cross-contamination between toppings.",
              })
            }
          />
        </li>
        <li>
          <DietaryTag
            name="Plant-Based"
            iconUrl={plantBasedIcon}
            onClick={() =>
              setModalData({
                title: "Plant-Based",
                content: (
                  <>
                    Plant-Based. Domino’s food is freshly prepared in store.
                    Whilst we and our ingredients’ suppliers take precautions,
                    we cannot guarantee that any product is free from allergens
                    due to the risk of cross-contamination. Our stores are busy
                    working environments and there is a risk of
                    cross-contamination between toppings.{" "}
                    <a
                      href="https://corporate.dominos.co.uk/Media/Default/Corporate%20Responsibility/Food/Dominos%20Ingredients%20and%20Allergens.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click for ingredient and allergen information.
                    </a>
                  </>
                ),
              })
            }
          />
        </li>
        <li>
          <DietaryTag
            name="Gluten free"
            iconUrl={glutenFreeIcon}
            onClick={() =>
              setModalData({
                title: "Gluten free",
                content:
                  "Suitable for coeliacs. All of our in-store procedures have been verified by Coeliac UK. A gluten free pizza crust will not be sliced.",
              })
            }
          />
        </li>
        <li>
          <DietaryTag name="Hot & spicy" iconUrl={spicyIcon} />
        </li>
      </ul>

      {modalData && (
        <DietaryModal
          title={modalData.title}
          content={modalData.content}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
}

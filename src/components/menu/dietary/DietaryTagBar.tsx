import DietaryTag from "./DietaryTag";
import vegetarianIcon from "../../../assets/menu/dietary/vegetarian.svg";
import plantBasedIcon from "../../../assets/menu/dietary/plant_based.svg";
import glutenFreeIcon from "../../../assets/menu/dietary/gluten_free.svg";
import spicyIcon from "../../../assets/menu/dietary/spicy.svg";
import softDrinksIcon from "../../../assets/menu/dietary/soft_drinks.svg";
import classes from "./DietaryTagBar.module.css";
import { useState } from "react";
import DietaryModal from "./DietaryModal";
import type { DietaryTagName } from "../../../types/DietaryTagName";

type ModalData = {
  title: string;
  content: React.ReactNode;
} | null;

interface DietaryTagBarProps {
  includedTags?: DietaryTagName[];
}

const allTags: {
  name: DietaryTagName;
  iconUrl: string;
  modalContent?: React.ReactNode;
}[] = [
  {
    name: "Vegetarian",
    iconUrl: vegetarianIcon,
    modalContent:
      "OK for vegetarians, however please note that we do not have a dedicated preparation or cooking area in our stores for vegetarian food. Our stores are busy working environments & there is a risk of cross-contamination between toppings.",
  },
  {
    name: "Plant-Based",
    iconUrl: plantBasedIcon,
    modalContent: (
      <>
        Plant-Based. Domino’s food is freshly prepared in store. Whilst we and
        our ingredients’ suppliers take precautions, we cannot guarantee that
        any product is free from allergens due to the risk of
        cross-contamination. Our stores are busy working environments and there
        is a risk of cross-contamination between toppings.{" "}
        <a
          href="https://corporate.dominos.co.uk/Media/Default/Corporate%20Responsibility/Food/Dominos%20Ingredients%20and%20Allergens.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for ingredient and allergen information.
        </a>
      </>
    ),
  },
  {
    name: "Gluten free",
    iconUrl: glutenFreeIcon,
    modalContent:
      "Suitable for coeliacs. All of our in-store procedures have been verified by Coeliac UK. A gluten free pizza crust will not be sliced.",
  },
  {
    name: "Hot & spicy",
    iconUrl: spicyIcon,
  },
  {
    name: "Soft drinks industry levy",
    iconUrl: softDrinksIcon,
  },
];

export default function DietaryTagBar({ includedTags }: DietaryTagBarProps) {
  const [modalData, setModalData] = useState<ModalData>(null);

  const visibleTags = includedTags
    ? allTags.filter((tag) => includedTags.includes(tag.name))
    : allTags;

  return (
    <div className={classes.dietary_tags_container}>
      <ul>
        {visibleTags.map((tag) => (
          <li key={tag.name}>
            <DietaryTag
              name={tag.name}
              iconUrl={tag.iconUrl}
              onClick={
                tag.modalContent
                  ? () =>
                      setModalData({
                        title: tag.name,
                        content: tag.modalContent,
                      })
                  : undefined
              }
            />
          </li>
        ))}
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

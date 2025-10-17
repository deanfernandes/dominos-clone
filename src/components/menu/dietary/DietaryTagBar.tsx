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
    modalContent: "OK for vegetarians... (same as before)",
  },
  {
    name: "Plant-Based",
    iconUrl: plantBasedIcon,
    modalContent: (
      <>
        Plant-Based. Domino’s food is freshly prepared...
        <a href="..." target="_blank" rel="noopener noreferrer">
          Click for ingredient and allergen information.
        </a>
      </>
    ),
  },
  {
    name: "Gluten free",
    iconUrl: glutenFreeIcon,
    modalContent: "Suitable for coeliacs... (same as before)",
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

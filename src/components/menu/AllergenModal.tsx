import type { AllergenModalData } from "../../types/AllergenModalData";
import classes from "./AllergenModal.module.css";

interface AllergenModalProps {
  data: AllergenModalData;
  onClose: () => void;
}

export default function AllergenModal({ data, onClose }: AllergenModalProps) {
  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.container} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <h2>Allergen information</h2>
          <button onClick={onClose} className={classes.small_close_button}>
            X
          </button>
        </div>
        <h3>{data.itemName}</h3>
        <p>{data.itemDescription}</p>
        <h3>Your selected product contains the following allergens:</h3>
        <div></div>
        <p>
          For detailed allergen and ingredients information on this product
          please view our detailed{" "}
          <a href="https://corporate.dominos.co.uk/Media/Default/Corporate%20Responsibility/Food/Dominos%20Ingredients%20and%20Allergens.pdf?v=215014">
            allergen and ingredients information
          </a>{" "}
          summary.
        </p>
        <p>
          Many of our products are supplied with dips. For dips allergen
          information please see the menu or the product packaging.
        </p>
        <p>
          Our food is freshly prepared in store where equipment and utensils are
          shared, so we cannot guarantee that any product is free from
          allergens, even after ingredients have been removed on request, due to
          the risk of contamination.
        </p>
        <div className={classes.close_button_container}>
          <button onClick={onClose} className={classes.close_button}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

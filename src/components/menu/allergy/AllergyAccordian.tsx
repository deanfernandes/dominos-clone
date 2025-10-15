import { useState } from "react";
import classes from "./AllergyAccordian.module.css";

export default function AllergyAccordian() {
  const [showAllergyContent, setShowAllergyContent] = useState<boolean>(false);

  return (
    <div className={classes.allergy_card_container}>
      <div
        className={classes.allergy_content_btn}
        onClick={() => setShowAllergyContent((prev) => !prev)}
      >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" />
          </svg>
          Have an allergy?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className={
            showAllergyContent
              ? `${classes.chevron} ${classes.chevron_down}`
              : classes.chevron
          }
        >
          <path d="M297.4 169.4C309.9 156.9 330.2 156.9 342.7 169.4L534.7 361.4C547.2 373.9 547.2 394.2 534.7 406.7C522.2 419.2 501.9 419.2 489.4 406.7L320 237.3L150.6 406.6C138.1 419.1 117.8 419.1 105.3 406.6C92.8 394.1 92.8 373.8 105.3 361.3L297.3 169.3z" />
        </svg>
      </div>

      <div
        className={
          showAllergyContent
            ? `${classes.content} ${classes.content_shown}`
            : classes.content
        }
      >
        Our food is freshly prepared in store where equipment and utensils are
        shared, so we cannot guarantee that any product is free from allergens,
        even after ingredients have been removed on request, due to the risk of
        contamination. For detailed{" "}
        <a
          href="https://corporate.dominos.co.uk/Media/Default/Corporate%20Responsibility/Food/Dominos%20Ingredients%20and%20Allergens.pdf?v=7505"
          target="_blank"
        >
          allergen and ingredients information
        </a>{" "}
        on our products please view our allergens and ingredients information
        summary. Alternatively select the 'i' information icon to find product
        specific allergens and ingredient information.
      </div>
    </div>
  );
}

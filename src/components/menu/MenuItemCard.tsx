import classes from "./MenuItemCard.module.css";
import vegetarianIcon from "../../assets/menu/dietary/vegetarian.svg";
import plantBasedIcon from "../../assets/menu/dietary/plant_based.svg";
import glutenFreeIcon from "../../assets/menu/dietary/gluten_free.svg";
import spicyIcon from "../../assets/menu/dietary/spicy.svg";
import type { AllergyModalData } from "../../types/AllergyModalData";
import { useState } from "react";
import AllergenModal from "./allergy/AllergyModal";
import type { AnyMenuItem } from "../../types/MenuItem";

interface MenuItemCardProps {
  item: AnyMenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const [allergenModalData, setAllergenModalData] =
    useState<AllergyModalData | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(() => {
    if (item.pricing.pricingType === "single") {
      return item.pricing.price;
    } else {
      return item.pricing.sizePriceOptions[0].price;
    }
  });

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.dietary_tags}>
          <div>
            {item.type !== "drink" && (
              <div>
                {item.isVegetarian && (
                  <img src={vegetarianIcon} alt="" title="Vegetarian" />
                )}
                {item.isPlantBased && (
                  <img src={plantBasedIcon} alt="" title="Plant-based" />
                )}
                {item.isGlutenFree && (
                  <img src={glutenFreeIcon} alt="" title="Gluten free" />
                )}
                {item.isSpicy && (
                  <img src={spicyIcon} alt="" title="Hot & spicy" />
                )}
              </div>
            )}
          </div>
          <button
            className={classes.icon_button}
            onClick={() =>
              setAllergenModalData({
                itemName: item.name,
                itemDescription: item.description,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className={classes.info_icon}
            >
              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" />
            </svg>
          </button>
        </div>
        <button>
          <picture>
            <img src={item.imgUrl} alt="" />
          </picture>
        </button>
      </div>
      <div className={classes.footer}>
        <h2>{item.name}</h2>
        {item.type !== "drink" && (
          <p>
            {item.calories}kcal | Serves {item.minServes}
            {item.maxServes && `-${item.maxServes}`}
          </p>
        )}
        {item.pricing.pricingType === "multi" && (
          <select onChange={(e) => setSelectedPrice(Number(e.target.value))}>
            {item.pricing.sizePriceOptions.map((spo, i) => (
              <option key={i} value={spo.price}>
                {spo.size} {spo.price}
              </option>
            ))}
          </select>
        )}
        <div className={classes.add_button_container}>
          {item.type === "pizza" ? (
            <button>Customize</button>
          ) : (
            <div>
              <span className={classes.selected_price}>£{selectedPrice}</span>{" "}
              <select>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button className={classes.add_button}>
            <span>+</span>
          </button>
        </div>
      </div>

      {allergenModalData && (
        <AllergenModal
          data={allergenModalData}
          onClose={() => setAllergenModalData(null)}
        />
      )}
    </div>
  );
}

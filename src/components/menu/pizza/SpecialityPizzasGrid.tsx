import MenuHeader from "../MenuHeader";
import MenuItemCard from "../MenuItemCard";
import classes from "./SpecialityPizzasGrid.module.css";

export default function SpecialityPizzasGrid() {
  return (
    <div className={classes.container}>
      <MenuHeader text="Speciality Pizzas" />
      <div className={classes.dietary_tags_container}>
        <ul>
          <li></li>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M535.3 70.7C541.7 64.6 551 62.4 559.6 65.2C569.4 68.5 576 77.7 576 88L576 274.9C576 406.1 467.9 512 337.2 512C260.2 512 193.8 462.5 169.7 393.3C134.3 424.1 112 469.4 112 520C112 533.3 101.3 544 88 544C74.7 544 64 533.3 64 520C64 445.1 102.2 379.1 160.1 340.3C195.4 316.7 237.5 304 280 304L360 304C373.3 304 384 293.3 384 280C384 266.7 373.3 256 360 256L280 256C240.3 256 202.7 264.8 169 280.5C192.3 210.5 258.2 160 336 160C402.4 160 451.8 137.9 484.7 116C503.9 103.2 520.2 87.9 535.4 70.7z" />
              </svg>
              Plant-Based
            </button>
          </li>
          <li>
            <button>Gluten free</button>
          </li>
          <li>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M577 129C586.4 119.6 586.4 104.4 577 95.1C567.6 85.8 552.4 85.7 543.1 95.1L510.9 127.2C484.3 107.6 451.5 96 416 96C380.9 96 348.5 107.3 322.1 126.4C306.1 138.1 316.2 160 336 160L360 160C373.3 160 384 170.7 384 184L384 264C384 277.3 394.7 288 408 288L488 288C501.3 288 512 298.7 512 312L512 336C512 355.8 533.9 365.9 545.6 349.9C564.7 323.5 576 291.1 576 256C576 220.5 564.4 187.7 544.8 161.1L577 129zM302 199.5L142.4 427.5C133.3 440.4 118.7 448 103 448L96 448C69.5 448 48 469.5 48 496C48 522.5 69.5 544 96 544L123.1 544C188.8 544 252.8 523.8 306.6 486.2L472.5 370.1C467 359.9 464 348.2 464 336L408 336C368.2 336 336 303.8 336 264L336 208C323.8 208 312.1 205 302 199.5z" />
              </svg>
              Hot & spicy
            </button>
          </li>
        </ul>
      </div>
      <div>
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

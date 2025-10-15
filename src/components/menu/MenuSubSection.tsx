import DietaryTagBar from "./dietary/DietaryTagBar";
import MenuItemGrid from "./MenuItemGrid";
import type { MenuItem } from "../../types/MenuItem";
import classes from "./MenuSubSection.module.css";

interface MenuSubSectionProps {
  heading: string;
  menuItems: MenuItem[];
}

export default function MenuSubSection({
  heading,
  menuItems,
}: MenuSubSectionProps) {
  return (
    <section className={classes.container}>
      <h3 className={classes.heading}>{heading}</h3>
      <DietaryTagBar />
      <MenuItemGrid menuItems={menuItems} />
    </section>
  );
}

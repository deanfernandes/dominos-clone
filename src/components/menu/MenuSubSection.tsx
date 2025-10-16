import DietaryTagBar from "./dietary/DietaryTagBar";
import MenuItemGrid from "./MenuItemGrid";
import type { AnyMenuItem } from "../../types/MenuItem";
import classes from "./MenuSubSection.module.css";

interface MenuSubSectionProps {
  heading?: string;
  items: AnyMenuItem[];
}

export default function MenuSubSection({
  heading,
  items,
}: MenuSubSectionProps) {
  return (
    <section className={classes.container}>
      {heading && <h3 className={classes.heading}>{heading}</h3>}
      <DietaryTagBar />
      <MenuItemGrid items={items} />
    </section>
  );
}

import DietaryTagBar from "./dietary/DietaryTagBar";
import MenuItemGrid from "./MenuItemGrid";
import type { AnyMenuItem } from "../../types/MenuItem";
import classes from "./MenuSubSection.module.css";
import type { DietaryTagName } from "../../types/DietaryTagName";

interface MenuSubSectionProps {
  heading?: string;
  items: AnyMenuItem[];
  includedTags?: DietaryTagName[];
}

export default function MenuSubSection({
  heading,
  items,
  includedTags,
}: MenuSubSectionProps) {
  return (
    <section className={classes.container}>
      {heading && <h3 className={classes.heading}>{heading}</h3>}
      <DietaryTagBar includedTags={includedTags} />
      <MenuItemGrid items={items} />
    </section>
  );
}

import DietaryTagBar from "./dietary/DietaryTagBar";
import MenuItemGrid from "./MenuItemGrid";
import type { AnyMenuItem } from "../../types/MenuItem";
import classes from "./MenuSubSection.module.css";
import type { DietaryTagName } from "../../types/DietaryTagName";
import SubSectionHeader from "../SubSectionHeader";

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
      <SubSectionHeader text={heading} />
      <DietaryTagBar includedTags={includedTags} />
      <MenuItemGrid items={items} />
    </section>
  );
}

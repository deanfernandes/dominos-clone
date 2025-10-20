import MenuItemCard from "./MenuItemCard";
import type { AnyMenuItem } from "../../types/MenuItem";
import classes from "./MenuItemGrid.module.css";

interface MenuItemGridProps {
  items: AnyMenuItem[];
}

export default function MenuItemGrid({ items }: MenuItemGridProps) {
  return (
    <div className={classes.container}>
      {items.map((i) => (
        <MenuItemCard key={i.name} item={i} />
      ))}
    </div>
  );
}

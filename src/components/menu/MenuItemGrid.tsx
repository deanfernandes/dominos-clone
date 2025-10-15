import MenuItemCard from "./MenuItemCard";
import type { MenuItem } from "../../types/MenuItem";
import classes from "./MenuItemGrid.module.css";

interface MenuItemGridProps {
  menuItems: MenuItem[];
}

export default function MenuItemGrid({ menuItems }: MenuItemGridProps) {
  return (
    <div className={classes.container}>
      {menuItems.map((m) => (
        <MenuItemCard key={m.name} menuItem={m} />
      ))}
    </div>
  );
}

import classes from "./Menu.module.css";
import MenuBanner from "../components/menu/MenuBanner";
import AllergyInfoCard from "../components/menu/AllergyAccordian.tsx";

export default function Menu() {
  return (
    <div>
      <MenuBanner />
      <AllergyInfoCard />
    </div>
  );
}

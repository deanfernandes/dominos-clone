import MenuBanner from "../components/menu/MenuBanner";
import AllergyInfoCard from "../components/menu/AllergyAccordian.tsx";
import PizzaSection from "../components/menu/pizza/PizzaSection.tsx";

export default function Menu() {
  return (
    <div>
      <MenuBanner />
      <AllergyInfoCard />
      <PizzaSection />
    </div>
  );
}

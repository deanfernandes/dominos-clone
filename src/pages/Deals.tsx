import banner from "../assets/deals/banner.webp";
import "../components/deals/VouchersSubSection";
import VouchersSubSection from "../components/deals/VouchersSubSection";
import classes from "./Deals.module.css";
import DealsSubSection from "../components/deals/DealsSubSection";

export default function Deals() {
  return (
    <section className={classes.container}>
      <picture>
        <source></source>
        <img src={banner} alt="Buy One Get One Free Our Big 40" />
      </picture>

      <VouchersSubSection />

      <DealsSubSection />
    </section>
  );
}

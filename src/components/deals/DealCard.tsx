import type { Deal } from "../../types/Deal";
import classes from "./DealCard.module.css";

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  return (
    <article className={classes.container}>
      <header className={classes.header_container}>
        <img src={deal.imgUrl} alt="" />
      </header>

      <div className={classes.body_container}>
        <h3>{deal.title}</h3>

        <p>{deal.description}</p>
      </div>

      <div className={classes.footer_container}>
        <button>+</button>
      </div>
    </article>
  );
}

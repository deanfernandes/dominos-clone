import type { Deal } from "../../types/Deal";
import DealCard from "./DealCard";
import classes from "./DealsGrid.module.css";

interface DealsGridProps {
  deals: Deal[];
}

export default function DealsGrid({ deals }: DealsGridProps) {
  return (
    <div className={classes.container}>
      {deals.map((d) => (
        <DealCard key={d.id} deal={d} />
      ))}
    </div>
  );
}

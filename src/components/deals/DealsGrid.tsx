import type { Deal } from "../../types/Deal";
import DealCard from "./DealCard";
import classes from "./DealsGrid.module.css";

interface DealsGridProps {
  deals: Deal[];
  clearFilters: () => void;
}

export default function DealsGrid({ deals, clearFilters }: DealsGridProps) {
  return (
    <div>
      {deals.length > 0 ? (
        <div className={classes.container}>
          {deals.map((d) => (
            <DealCard key={d.id} deal={d} />
          ))}
        </div>
      ) : (
        <div className={classes.no_deals_container}>
          <h4>No deals match your filter choices.</h4>
          <span>
            Try removing or changing your filters to make them less specific.
          </span>
          <button onClick={clearFilters}>Clear filters</button>
        </div>
      )}
    </div>
  );
}

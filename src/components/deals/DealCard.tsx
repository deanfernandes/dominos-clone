import type { Deal } from "../../types/Deal";

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  return (
    <article>
      <header>
        <img src={deal.imgUrl} alt="" />
      </header>

      <h3>{deal.title}</h3>

      <p>{deal.description}</p>

      <button>+</button>
    </article>
  );
}

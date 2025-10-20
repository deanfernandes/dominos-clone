import type { Voucher } from "../../types/Voucher";
import classes from "./VoucherCard.module.css";

interface VoucherCardProps {
  voucher: Voucher;
}

export default function VoucherCard({ voucher }: VoucherCardProps) {
  return (
    <article className={classes.container}>
      <h3>{voucher.description}</h3>
      <button>Apply Voucher</button>
      <a
        href="https://www.dominos.co.uk/legal/content/competitionsoffers"
        target="_blank"
      >
        Full T&Cs here
      </a>
    </article>
  );
}

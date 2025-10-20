import VoucherCard from "./VoucherCard";
import type { Voucher } from "../../types/Voucher";
import classes from "./VouchersGrid.module.css";

interface VouchersGridProps {
  vouchers: Voucher[];
}

export default function VouchersGrid({ vouchers }: VouchersGridProps) {
  return (
    <div className={classes.container}>
      {vouchers.map((v) => (
        <VoucherCard key={v.id} voucher={v} />
      ))}
    </div>
  );
}

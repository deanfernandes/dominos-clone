import SubSectionHeader from "../SubSectionHeader";
import VouchersGrid from "./VouchersGrid";
import type { Voucher } from "../../types/Voucher";

const vouchers: Voucher[] = [
  { id: 1, description: "£20 OFF when you spend £50+" },
  { id: 2, description: "£15 OFF when you spend £40+" },
  { id: 3, description: "£10 OFF when you spend £30+" },
];

export default function VouchersSubSection() {
  return (
    <section>
      <SubSectionHeader text="Vouchers" />
      <VouchersGrid vouchers={vouchers} />
    </section>
  );
}

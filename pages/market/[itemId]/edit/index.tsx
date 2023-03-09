import { useState } from "react";
import MarketNewIndex from "../../../../src/components/unit/new/market.new.index";

export default function MarketEditPage() {
  const [isEdit, setIsEdit] = useState(true);
  return <MarketNewIndex isEdit={isEdit} />;
}

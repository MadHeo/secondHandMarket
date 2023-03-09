import { useState } from "react";
import MarketNewIndex from "../../../src/components/unit/new/market.new.index";

export default function MarketNewPage(): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

  return <MarketNewIndex isEdit={isEdit} />;
}

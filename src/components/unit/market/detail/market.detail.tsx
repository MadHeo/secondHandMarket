import styled from "@emotion/styled";
import MarketDetailIndex from "./body/market.detail.index";

const MaimBox = styled.div`
  width: 1120px;
  height: 1080px;
  overflow: auto;
`;

export default function MarketDetailPage() {
  return (
    <>
      <MaimBox>
        <MarketDetailIndex />
      </MaimBox>
    </>
  );
}

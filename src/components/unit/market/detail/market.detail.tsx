import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { withAuth } from "../../../../commons/withAuth/withAuth";
import MarketCommentListIndex from "../comment/commentList/market.commentList.index";
import MarketCommentWriteIndex from "../comment/commentWrite/market.commentWrite.index";
import MarketDetailIndex from "./body/market.detail.index";

const MaimBox = styled.div`
  width: 1120px;
  height: 1080px;
  overflow: auto;
`;

function MarketDetailPage() {
  return (
    <>
      <MaimBox>
        <MarketDetailIndex />
        <MarketCommentWriteIndex />
        <MarketCommentListIndex />
      </MaimBox>
    </>
  );
}

export default withAuth(MarketDetailPage);

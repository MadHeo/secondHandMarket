import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import MarketCommentListIndex from "../comment/commentList/market.commentList.index";
import MarketCommentWriteIndex from "../comment/commentWrite/market.commentWrite.index";
import MarketCommentAnswerListIndex from "../commentAnswer/commentAnswerList/market.commentAnswer.list.index";
import MarketDetailIndex from "./body/market.detail.index";

const MaimBox = styled.div`
  width: 1120px;
  height: 1080px;
  overflow: auto;
`;

export default function MarketDetailPage() {
  // const loadFunc = (): void => {
  //   if (data === undefined) return;
  //   fetchMore({
  //     variables: {
  //       page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (fetchMoreResult.fetchUseditemQuestions === undefined) {
  //         return {
  //           fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
  //         };
  //       }

  //       return {
  //         fetchUseditemQuestions: [
  //           ...prev.fetchUseditemQuestions,
  //           ...fetchMoreResult.fetchUseditemQuestions,
  //         ],
  //       };
  //     },
  //   });
  // };
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

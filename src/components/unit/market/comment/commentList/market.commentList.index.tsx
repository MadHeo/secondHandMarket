import { useMutation, useQuery } from "@apollo/client";

import { ChangeEvent, ChangeEventHandler, useState, MouseEvent } from "react";

import { useRouter } from "next/router";
import { Button, Modal } from "antd";

import { gql } from "@apollo/client";
import * as S from "./market.commentList.style";
import InfiniteScroll from "react-infinite-scroller";
import { MarketCommentAnswerListIndex } from "../../commentAnswer/commentAnswerList/market.commentAnswer.list.index";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
      writer
      contents
    }
  }
`;

export const FETCH_USED_ITEM_QUESTIONS_ANSWER = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;

export default function MarketCommentListIndex() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const [commentId, setCommentId] = useState();
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [UpContents, setUpContents] = useState("");
  const [UpRating, setUpRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [MyIdx, setMyIdx] = useState(-1);
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.itemId,
    },
  });

  const { data: answerData } = useQuery(FETCH_USED_ITEM_QUESTIONS_ANSWER, {
    variables: {
      useditemQuestionId: router.query.itemId,
      page: 1,
    },
  });

  const loadFunc = (): void => {
    if (data === undefined) return;
    fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemQuestions.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions === undefined) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const handleOk = (): void => {
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const onClickDeleteBtn = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    const pw = prompt("비밀번호를 입력해주세요");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.currentTarget.id,
          password: pw,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.itemId,
            },
          },
        ],
      });
    } catch {
      Modal.error({
        title: "에러",
        content: "비밀번호를 확인해 주세요",
      });
    }
  };

  const onClickEditComplete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    // const updateBoardCommentInput = {};
    // if (UpRating) updateBoardCommentInput.rating = UpRating;
    // if (UpContents) updateBoardCommentInput.contents = UpContents;
    await updateBoardComment({
      variables: {
        boardCommentId: event.currentTarget.id,
        password: password,
        // updateBoardCommentInput: updateBoardCommentInput,
        updateBoardCommentInput: {
          contents: contents,
          rating: rating,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: {
            boardId: router.query.boardNumber,
          },
        },
      ],
    });
    setMyIdx(-1);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.currentTarget.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const onChangeRating = (event: number) => {
    setRating(event);
  };

  const onClickEditBtn = (event: any): void => {
    setMyIdx(event.currentTarget.id);
  };

  const onClickEditCancel = (event: any) => {
    setMyIdx(event.currentTarget.id);
  };

  return (
    <>
      <S.MainBox>
        <S.SubBox style={{ height: "500px", overflow: "auto" }}>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true}
            useWindow={false}
          >
            {data?.fetchUseditemQuestions.map((el, idx) =>
              el._id !== MyIdx ? (
                <S.AllCommentsBox key={el._id}>
                  <S.CommentBox>
                    <S.TopBox>
                      <S.Name>{el.user.name}</S.Name>
                      <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
                    </S.TopBox>
                    <S.BottomBox>
                      <S.ContentsBox>{el.contents}</S.ContentsBox>
                    </S.BottomBox>
                    {/* <S.CommentHandleBox>
                  <S.ChangeButton
                    id={el._id}
                    onClick={onClickEditBtn}
                  ></S.ChangeButton>
                  <S.DeleteButton
                    id={el._id}
                    onClick={onClickDeleteBtn}
                  ></S.DeleteButton>
                </S.CommentHandleBox> */}
                  </S.CommentBox>
                  <MarketCommentAnswerListIndex commentId={el._id} />
                </S.AllCommentsBox>
              ) : (
                <div></div>
              )
            )}
          </InfiniteScroll>
        </S.SubBox>
      </S.MainBox>
    </>
  );
}

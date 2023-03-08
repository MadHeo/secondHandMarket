import { useMutation, useQuery } from "@apollo/client";

import { ChangeEvent, ChangeEventHandler, useState, MouseEvent } from "react";

import { useRouter } from "next/router";
import { Button, Modal } from "antd";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../../commons/types/generated/types";
import { gql } from "@apollo/client";
import * as S from "./market.commentAnswer.list.style";
import InfiniteScroll from "react-infinite-scroller";

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

export const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
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

export const MarketCommentAnswerListIndex = (props) => {
  const router = useRouter();
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [MyIdx, setMyIdx] = useState(-1);

  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS_ANSWER, {
    variables: {
      useditemQuestionId: props.commentId,
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
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        update(cache, { data }) {
          cache.modify({
            // 캐시에있는 어떤 필드를 수정할 것 인지 key-value 형태로 적어줍니다.
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const deletedId = data.deleteUseditemQuestionAnswer; // 삭제된ID
                const filteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedId // el._id가 안되므로, readField를 사용해서 꺼내오기
                );
                return [...filteredPrev]; // 삭제된ID를 제외한 나머지 9개만 리턴
              },
            },
          });
        },
      });
    } catch {
      alert("삭제 실패!");
    }
  };

  const onClickEditComplete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    // const updateBoardCommentInput = {};
    // if (UpRating) updateBoardCommentInput.rating = UpRating;
    // if (UpContents) updateBoardCommentInput.contents = UpContents;
    // await updateBoardComment({
    //   variables: {
    //     boardCommentId: event.currentTarget.id,
    //     password: password,
    //     // updateBoardCommentInput: updateBoardCommentInput,
    //     updateBoardCommentInput: {
    //       contents: contents,
    //       rating: rating,
    //     },
    //   },
    //   refetchQueries: [
    //     {
    //       query: FETCH_BOARD_COMMENTS,
    //       variables: {
    //         boardId: router.query.boardNumber,
    //       },
    //     },
    //   ],
    // });
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
        <S.SubBox>
          {data?.fetchUseditemQuestionAnswers.map((el, idx) =>
            el._id !== MyIdx ? (
              <S.CommentAnswerBox key={el._id}>
                <S.AnswerIcon>
                  <img src="/image/icon_answer.png" />
                </S.AnswerIcon>
                <S.CommentBox>
                  <S.TopBox>
                    <S.Name>{el.user.name}</S.Name>
                    <S.Date>{el.createdAt.slice(0, 10)}</S.Date>
                  </S.TopBox>
                  <S.BottomBox>
                    <S.ContentsBox>{el.contents}</S.ContentsBox>
                    <S.ButtonBox>
                      <S.EditButton>수정</S.EditButton>
                      <S.DeleteButton id={el._id} onClick={onClickDeleteBtn}>
                        삭제
                      </S.DeleteButton>
                    </S.ButtonBox>
                  </S.BottomBox>
                </S.CommentBox>
              </S.CommentAnswerBox>
            ) : (
              <div></div>
            )
          )}
        </S.SubBox>
      </S.MainBox>
    </>
  );
};

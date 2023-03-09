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
import { UpdateUsedItemQuestionAnswer } from "../../../../../hooks/api/mutation/UpdateUsedItemQuestionAnswer";
import { DeleteUseditemQuestionAnswer } from "../../../../../hooks/api/mutation/DeleteUsedItemQuestionAnswer";

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

export const MarketCommentAnswerListIndex = (props) => {
  const [updateQuestionAnswer] = UpdateUsedItemQuestionAnswer();
  const [deleteQuestionAnswer] = DeleteUseditemQuestionAnswer();
  const router = useRouter();

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

  const onClickDeleteBtn = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.currentTarget.id,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const deletedId = data.deleteUseditemQuestionAnswer;
                const filteredPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                );
                return [...filteredPrev];
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
    await updateQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: event.currentTarget.id,
        updateUseditemQuestionAnswerInput: {
          contents,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchUseditemQuestionAnswers: (prev, { readField }) => {
              const deletedId = data.deleteUseditemQuestionAnswer;
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
    setMyIdx(-1);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.currentTarget.value);
  };

  const onClickEditBtn = (event: any): void => {
    setMyIdx(event.currentTarget.id);
  };

  const onClickEditCancel = (event: any) => {
    setMyIdx(-1);
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
                      <S.EditButton id={el._id} onClick={onClickEditBtn}>
                        수정
                      </S.EditButton>
                      <S.DeleteButton id={el._id} onClick={onClickDeleteBtn}>
                        삭제
                      </S.DeleteButton>
                    </S.ButtonBox>
                  </S.BottomBox>
                </S.CommentBox>
              </S.CommentAnswerBox>
            ) : (
              <S.CommentAnswerBox key={el._id}>
                <S.AnswerIcon>
                  <img src="/image/icon_answer.png" />
                </S.AnswerIcon>
                <S.CommentBox>
                  <S.TopBox style={{ backgroundColor: "gray" }}>
                    <S.Name>대댓글 수정</S.Name>
                  </S.TopBox>
                  <S.BottomBox>
                    <S.ContentsInput
                      onChange={onChangeContents}
                    ></S.ContentsInput>
                    <S.ButtonBox>
                      <S.EditButton id={el._id} onClick={onClickEditComplete}>
                        수정 완료
                      </S.EditButton>
                      <S.DeleteButton id={el._id} onClick={onClickEditCancel}>
                        취소
                      </S.DeleteButton>
                    </S.ButtonBox>
                  </S.BottomBox>
                </S.CommentBox>
              </S.CommentAnswerBox>
            )
          )}
        </S.SubBox>
      </S.MainBox>
    </>
  );
};

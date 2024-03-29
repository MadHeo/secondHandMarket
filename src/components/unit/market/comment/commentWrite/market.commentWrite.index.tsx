import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Button, Modal } from "antd";
import { Content } from "antd/es/layout/layout";
import { gql } from "@apollo/client";
import * as S from "./market.commentWrite.style";
import { ChangeEvent, useState } from "react";

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

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export default function MarketCommentWriteIndex(): JSX.Element {
  const [createUseditemQuestionInput] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [contents, setContents] = useState("");
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.itemId,
      page: 1,
    },
  });

  const onClickWriteBtn = async (): Promise<void> => {
    try {
      if (contents) {
        await createUseditemQuestionInput({
          variables: {
            useditemId: router.query.itemId,
            createUseditemQuestionInput: {
              contents,
            },
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
      } else {
        alert("댓글을 작성해 주세요~!!@!@");
      }
    } catch {
      alert("작성 실패!");
    }
  };

  const OnChangeContents = (event: ChangeEvent<HTMLInputElement>) =>
    setContents(event.target.value);

  return (
    <S.MainBox>
      <S.CommentBox>
        <S.TopBox>댓글 입력창</S.TopBox>
        <S.BottomBox>
          <S.InputBox
            onChange={OnChangeContents}
            placeholder="개인정보보호 뭐시기 좋은 말 고은 말로 써주세요"
          ></S.InputBox>
          <S.WriteButton onClick={onClickWriteBtn}>댓글 등록</S.WriteButton>
        </S.BottomBox>
      </S.CommentBox>
    </S.MainBox>
  );
}

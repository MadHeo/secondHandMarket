import { useMutation, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
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

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
    }
  }
`;

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
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
    }
  }
`;

export default function MarketCommentListIndex() {
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [fetchUseditemQuestionAnswers] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [contents, setContents] = useState("");
  const [useditemQuestionId, setUseditemQuestionId] = useState("");
  const [questionContents, setQuestionContents] = useState("");
  const [MyIdx, setMyIdx] = useState(-1);
  const [onQuestion, setOnQuestion] = useState(-1);
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

  const onClickDeleteBtn = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await fetchUseditemQuestionAnswers({
        variables: {
          useditemQuestionId: event.currentTarget.id,
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
      alert("삭제 실패!");
    }
  };

  const onClickEditComplete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    await updateUseditemQuestion({
      variables: {
        useditemQuestionId: event.currentTarget.id,
        updateUseditemQuestionInput: {
          contents: contents,
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
    setMyIdx(-1);
  };

  const onClickQuestionAnswerWrite = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          useditemQuestionId: useditemQuestionId,
          createUseditemQuestionAnswerInput: {
            contents: questionContents,
          },
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      setOnQuestion(-1);
    } catch {
      alert("작성 실패!");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.currentTarget.value);
  };

  const onChangeQuestionContents = (event) => {
    setQuestionContents(event.currentTarget.value);
  };

  const onClickEditBtn = (event: any): void => {
    setMyIdx(event.currentTarget.id);
  };

  const onClickEditCancel = (event: any) => {
    setMyIdx(event.currentTarget.id);
  };

  const onClickQuestion = (event) => {
    setOnQuestion(event.currentTarget.id);
    setUseditemQuestionId(event.currentTarget.id);
  };

  const onClickQuestionCancel = () => {
    setOnQuestion(-1);
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
                      <S.QuestionButton id={el._id} onClick={onClickQuestion}>
                        댓글 달기
                      </S.QuestionButton>
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
                  {onQuestion === el._id ? (
                    <S.QuestionSubBox>
                      <S.QuestionBox>
                        <S.QuestionTopBox>대댓글 입력창</S.QuestionTopBox>
                        <S.QuestionBottomBox>
                          <S.QuestionInputBox
                            id={el._id}
                            onChange={onChangeQuestionContents}
                          ></S.QuestionInputBox>
                          <S.QuestionWriteButton
                            onClick={onClickQuestionAnswerWrite}
                          >
                            완료
                          </S.QuestionWriteButton>
                          <S.QuestionCancelButton
                            onClick={onClickQuestionCancel}
                          >
                            취소
                          </S.QuestionCancelButton>
                        </S.QuestionBottomBox>
                      </S.QuestionBox>
                    </S.QuestionSubBox>
                  ) : (
                    <></>
                  )}
                  <MarketCommentAnswerListIndex commentId={el._id} />
                </S.AllCommentsBox>
              ) : (
                <>
                  <S.EditCommentBox>
                    <S.EditCommentTopBox>댓글 수정 ✏️</S.EditCommentTopBox>
                    <S.EditCommentBottomBox>
                      <S.EditCommentInputBox
                        onChange={onChangeContents}
                      ></S.EditCommentInputBox>
                      <S.EditCommentWriteButton
                        id={el._id}
                        onClick={onClickEditComplete}
                      >
                        수정 완료
                      </S.EditCommentWriteButton>
                      <S.EditCommentCancelButton onClick={onClickEditCancel}>
                        취소
                      </S.EditCommentCancelButton>
                    </S.EditCommentBottomBox>
                  </S.EditCommentBox>
                </>
              )
            )}
          </InfiniteScroll>
        </S.SubBox>
      </S.MainBox>
    </>
  );
}

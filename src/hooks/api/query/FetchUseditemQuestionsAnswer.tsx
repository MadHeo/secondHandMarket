import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../commons/types/generated/types";

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

export const FetchUseditemQuestionsAnswer = ({}) => {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTIONS_ANSWER);

  return { data, refetch, fetchMore };
};

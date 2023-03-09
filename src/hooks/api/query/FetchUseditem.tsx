import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const FetchUseditem = () => {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM);

  return { data, refetch, fetchMore };
};

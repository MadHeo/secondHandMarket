import { ApolloQueryResult } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent } from "react";
import { IQuery } from "../../commons/types/generated/types";

interface IUseSearchBarArgs {
  refetch: (
    variables?: Partial<any> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, any>>>;
}

export const useSearchBar = (args: IUseSearchBarArgs) => {
  const getDebounce = _.debounce((value) => {
    void args.refetch({ search: value, page: 1 });
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  return { onChangeSearch };
};

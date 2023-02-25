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
  const getDebounce = _.debounce((value: string) => {
    void args.refetch({ search: value, page: 1 });
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return { onChangeSearch };
};

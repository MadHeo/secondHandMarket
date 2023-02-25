import { ChangeEvent } from "react";
import {
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../commons/types/generated/types";

export interface ISearchbars01UIProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchbars01Props {
  refetch: (variables: Partial<IQueryFetchBoardsArgs>) => void;
  refetchBoardsCount: (variables: Partial<IQueryFetchBoardsCountArgs>) => void;
}

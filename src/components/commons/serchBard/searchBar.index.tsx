import _ from "lodash";
import { ChangeEvent } from "react";
import * as S from "./searchBar.style";
import { SearchOutlined } from "@ant-design/icons";

export interface ISearchBarProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar(props: ISearchBarProps): JSX.Element {
  return (
    <S.SearchBox>
      <S.SearchIcon>
        <SearchOutlined></SearchOutlined>
      </S.SearchIcon>
      <S.SearchInput
        placeholder="검색하면 원하시는 상품을 찾을 수 있어요!!! -_-"
        onChange={props.onChangeSearch}
      ></S.SearchInput>
    </S.SearchBox>
  );
}

import styled from "@emotion/styled";
import { useQueryFetchUseditems } from "../../../hooks/api/query/useQueryFetchUseditems";
import { useSearchBar } from "../../../hooks/commons/useSearchBar";
import SearchBar from "../../commons/serchBard/searchBar.index";
import MarketListBody from "./list/body/market.list.body.index";
import MarketListHeader from "./list/header/market.list.hearder.index";

const MainBox = styled.div`
  display: flex;
  width: 1120px;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export default function MarketListPage(): JSX.Element {
  const { data, refetch, fetchMore } = useQueryFetchUseditems();
  const { onChangeSearch } = useSearchBar({
    refetch,
  });

  return (
    <MainBox>
      <MarketListHeader>
        <SearchBar onChangeSearch={onChangeSearch} />
      </MarketListHeader>
      <MarketListBody data={data} refetch={refetch}></MarketListBody>
    </MainBox>
  );
}

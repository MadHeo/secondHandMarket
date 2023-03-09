import styled from "@emotion/styled";
import { FetchUseditems } from "../../../../hooks/api/query/FetchUseditems";
import { useSearchBar } from "../../../../hooks/custom/useSearchBar";
import SearchBar from "../../../commons/serchBard/searchBar.index";
import MarketListBody from "./body/market.list.body.index";
import MarketListHeader from "./header/market.list.hearder.index";

const MainBox = styled.div`
  display: flex;
  width: 1120px;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export default function MarketListPage(): JSX.Element {
  const { data, refetch, fetchMore } = FetchUseditems();
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

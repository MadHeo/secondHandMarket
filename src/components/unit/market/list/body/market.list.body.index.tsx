import { useQueryFetchUseditems } from "../../../../../hooks/api/query/useQueryFetchUseditems";
import { useMoveToPage } from "../../../../../hooks/commons/useMoveToPage";
import * as S from "./market.list.body.style";

export default function MarketListBody(props): JSX.Element {
  const { data, refetch, fetchMore } = useQueryFetchUseditems();
  const { onClickMoveToPage } = useMoveToPage();

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <div>
      <S.MainBox>
        <S.CardsBox>
          <S.Scroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el) => (
              <S.ProductCard
                key={el._id}
                onClick={onClickMoveToPage(`/products/${el._id}`)}
              >
                <S.ProductCardImageBox>
                  {el.images[0] ? (
                    <img
                      src={`https://storage.googleapis.com/${el.images[0]}`}
                      alt=""
                    />
                  ) : (
                    <img src="/image/img_empty4.jpeg" alt="" />
                  )}
                </S.ProductCardImageBox>
                <S.ProductCardTextBox>
                  <span>{el.name.slice(0, 50)}</span>
                  <span>{el.price + " 원"}</span>
                  <span>{el.createdAt.slice(0, 10).replaceAll("-", ".")}</span>
                  <span>{"#" + el.tags}</span>
                </S.ProductCardTextBox>
              </S.ProductCard>
            ))}
          </S.Scroll>
        </S.CardsBox>
      </S.MainBox>
    </div>
  );
}

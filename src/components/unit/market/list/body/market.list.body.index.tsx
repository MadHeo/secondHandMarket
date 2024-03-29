import { useEffect, useState } from "react";
import { FetchUseditems } from "../../../../../hooks/api/query/FetchUseditems";
import { useMoveToPage } from "../../../../../hooks/custom/useMoveToPage";
import * as S from "./market.list.body.style";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useAddTodayItem } from "../../../../../hooks/custom/useAddTodayItem";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      images
      tags
      pickedCount
      seller {
        _id
        email
        name
      }
      useditemAddress {
        _id
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export default function MarketListBody(props): JSX.Element {
  const router = useRouter();
  const { data, refetch, fetchMore } = FetchUseditems();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickAddTodayItem } = useAddTodayItem();
  const [position, setPosition] = useState(0);

  const { data: usedItemData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.itemId },
  });

  useEffect(() => {
    window.addEventListener("scroll", (Scroll) => {});
  }, []);

  const on = () => {
    const mainBox = document.getElementById("box");
    setPosition(mainBox?.scrollTop);
  };

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
        <S.CircleBox>
          <img
            src="/image/circle.png/"
            alt=""
            id="circle"
            style={{ transform: `rotate(${position / 8}deg)` }}
          />
        </S.CircleBox>
        <S.CardsBox id="box" onScroll={on}>
          <S.Scroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el, idx) => (
              <S.ProductCard key={uuidv4()} onClick={onClickAddTodayItem(el)}>
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

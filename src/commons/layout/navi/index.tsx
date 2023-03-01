import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./navi.style";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
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

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.itemId },
  });

  const onClickLogo = () => {
    router.push("/home/");
  };

  const onClickMarket = () => {
    router.push("/market/list");
  };

  const onClickNewItem = () => {
    router.push("/market/new");
  };

  const [getTodayItem, setGetTodayItem] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setGetTodayItem(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <S.MainBox>
      <S.LogoBox onClick={onClickLogo}>
        <img src="/image/logo.png" alt="" />
      </S.LogoBox>
      <S.MenuBox>
        <S.MenuButton onClick={onClickMarket}>상품 보기</S.MenuButton>
        <S.MenuButton onClick={onClickNewItem}>상품 등록</S.MenuButton>
      </S.MenuBox>
      <S.TodayItemBox>
        <S.TodayItem>
          {getTodayItem ? <div>데이터 있음</div> : <div>데이터 없음</div>}

          <S.TodayItemImage />
        </S.TodayItem>
      </S.TodayItemBox>
    </S.MainBox>
  );
}

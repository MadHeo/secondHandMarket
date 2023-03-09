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

  const onClickLogo = () => {
    router.push("/home/");
    setTimeout(() => window.location.reload(), 500);
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
      const getTodyItem = () => {
        let localData = JSON.parse(localStorage.getItem("data"));
        setGetTodayItem(localData);
      };

      getTodyItem();
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
        {getTodayItem?.map((el, idx) => (
          <S.TodayItem key={idx}>
            <S.TodayItemInfo>{el?.name}</S.TodayItemInfo>

            {el?.images[0] ? (
              <S.TodayItemImage
                src={`https://storage.googleapis.com/${el?.images[0]}`}
              />
            ) : (
              <S.TodayItemImage src={`/image/img_empty1.png`} />
            )}
          </S.TodayItem>
        ))}
      </S.TodayItemBox>
    </S.MainBox>
  );
}

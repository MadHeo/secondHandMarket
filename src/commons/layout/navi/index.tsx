import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as S from "./navi.style";
import { useMoveToPage } from "../../../hooks/custom/useMoveToPage";

interface IGetTodayItem {
  name: string;
  images: string;
}

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
  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogo = () => {
    router.push("/home/");
    setTimeout(() => window.location.reload(), 500);
  };

  const [getTodayItem, setGetTodayItem] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getTodyItem = () => {
        let localData = localStorage.getItem("todayItem");
        if (localData === null || localData === undefined) {
          return [];
        } else {
          const item = JSON.parse(localData);
          setGetTodayItem(item);
        }
      };

      getTodyItem();
    }
  }, [router]);

  return (
    <S.MainBox>
      <S.LogoBox onClick={onClickLogo}>
        <img src="/image/logo.png" alt="" />
      </S.LogoBox>
      <S.MenuBox>
        <S.MenuButton onClick={onClickMoveToPage("/market/list")}>
          상품 보기
        </S.MenuButton>
        <S.MenuButton onClick={onClickMoveToPage("/market/new")}>
          상품 등록
        </S.MenuButton>
      </S.MenuBox>
      <S.TodayItemBox>
        {getTodayItem?.map((el: IGetTodayItem, idx: number) => (
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

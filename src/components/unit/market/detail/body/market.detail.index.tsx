import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/Bs";
import { useGetKakaoMap } from "../../../../../hooks/custom/useGetKakaoMap";
import * as S from "./market.detail.style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
      name
      remarks
      contents
      price
    }
  }
`;

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

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export default function MarketDetailIndex() {
  const { kakaomap } = useGetKakaoMap();
  const router = useRouter();
  const [OnAddress, setOnAddress] = useState(0);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createBuying] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [isWish, setIsWish] = useState(false);

  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.itemId },
  });

  const onClickListBtn = () => {
    router.push("/market/list");
  };

  useEffect(() => {
    let getTodayItem = localStorage.getItem("data");

    if (getTodayItem === null) {
      getTodayItem = [];
    } else {
      getTodayItem = JSON.parse(getTodayItem);
    }

    getTodayItem.push(router.query.itemId);
    getTodayItem = new Set(getTodayItem);
    getTodayItem = [...getTodayItem];
    localStorage.setItem("data", JSON.stringify(getTodayItem));
  });

  const onClickEditBtn = () => {
    // router.push(`/products/${router.query.productId}/edit`);
  };

  const onClickDeleteBtn = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.itemId,
        },
      });
      router.push("/market/list");
    } catch {
      alert("삭제 실패!");
    }
  };

  const onClickBuyBtn = async () => {
    try {
      await createBuying({
        variables: {
          useritemId: router.query.itemId,
        },
      });
      router.push("/market/list");
      alert("구매완료");
    } catch {
      alert("구매 실패ㅠㅠ");
    }
  };

  const onClickWishBtn = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: router.query.itemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: {
              useditemId: router.query.itemId,
            },
          },
        ],
      });
      setIsWish(true);
      alert("장바구니에 담겼습니다");
    } catch {
      alert("에러입니당");
    }
  };

  kakaomap();

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
  };
  return (
    <div>
      <S.Wrapper>
        <S.BoardWrapper>
          <S.TopBox>
            <S.Seller>
              {data ? data?.fetchUseditem?.seller.name : "...loading"}
            </S.Seller>
            <S.Date>
              {" "}
              {data
                ? data?.fetchUseditem?.createdAt
                    .slice(0, 10)
                    .replaceAll("-", ".")
                : "...loading"}
            </S.Date>
          </S.TopBox>
          <S.TitleBox>
            <S.TitleText>
              {data ? data?.fetchUseditem?.name : "...loading"}
            </S.TitleText>
            <S.Pick>
              <img src="/image/Favorites.png" alt="" />
            </S.Pick>
            <S.PickCount>
              {data ? data?.fetchUseditem?.pickedCount : "...loading"}
            </S.PickCount>
          </S.TitleBox>
          <S.PriceBox>
            {data ? data?.fetchUseditem?.price.toLocaleString() : "...loading"}
            원
          </S.PriceBox>
          <Slider {...settings}>
            {data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <>
                  <S.ImageBox key={el}>
                    <S.ImageContent
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  </S.ImageBox>
                </>
              ))}
          </Slider>
          <S.RemarkBox>
            {data ? data?.fetchUseditem?.remarks : "...loading"}
          </S.RemarkBox>
          <S.ContentBox>
            {data ? data?.fetchUseditem?.contents : "...loading"}
          </S.ContentBox>
          <S.MapBox>
            <S.MapText>거래 위치 확인해주세요!</S.MapText>
            <S.MapContents>
              <div id="map" style={{ width: "605px", height: "280px" }}></div>
            </S.MapContents>
          </S.MapBox>
          <S.ButtonBox>
            <S.ButtonContent>
              <S.Button
                onClick={onClickListBtn}
                style={{ color: "white", backgroundColor: "#4D7BFF" }}
              >
                목록보기
              </S.Button>
              <S.Button
                onClick={onClickBuyBtn}
                style={{ backgroundColor: "#7FFF5B" }}
              >
                구매하기
              </S.Button>
              <S.Button
                onClick={onClickWishBtn}
                style={{ backgroundColor: "#F065B0" }}
              >
                장바구니
              </S.Button>
            </S.ButtonContent>
          </S.ButtonBox>
        </S.BoardWrapper>
      </S.Wrapper>
    </div>
  );
}

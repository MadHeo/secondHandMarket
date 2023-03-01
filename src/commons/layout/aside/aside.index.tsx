import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import * as S from "./aside.style";
import { accessTokenState } from "../../store";
import Link from "next/link";

const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutAside(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN, {});
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logout] = useMutation(LOGOUT_USER);

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  const onClickLogout = async () => {
    await logout();
  };

  const onClickCharge = async () => {
    router.push("/charge");
  };

  return (
    <S.MainBox>
      <S.LogoBox>
        {accessToken ? (
          <S.HelloText>{`${data?.fetchUserLoggedIn.name}님 환영합니다`}</S.HelloText>
        ) : (
          <div>안녕하세요</div>
        )}
      </S.LogoBox>
      <S.MenuBox>
        {accessToken ? (
          <div></div>
        ) : (
          <>
            <Link href={"/login"}>
              <S.MenuButton>로그인</S.MenuButton>
            </Link>

            <S.MenuButton onClick={onClickSignUp}>회원가입</S.MenuButton>
          </>
        )}
      </S.MenuBox>
      <S.PointBox>
        {accessToken ? (
          <>
            <S.PointText>{`포인트 : ${data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()}P`}</S.PointText>
            <S.ChargeButton onClick={onClickCharge}>
              포인트 충전하기
            </S.ChargeButton>{" "}
            <S.LogoutButton onClick={onClickLogout}>로그아웃</S.LogoutButton>
          </>
        ) : (
          <div></div>
        )}
      </S.PointBox>
    </S.MainBox>
  );
}

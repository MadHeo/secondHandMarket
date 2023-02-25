import { useRouter } from "next/router";
import * as S from "./aside.style";

export default function LayoutAside(): JSX.Element {
  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickSignUp = () => {
    router.push("/signup");
  };

  return (
    <S.MainBox>
      <S.LogoBox>
        <S.HelloText>{`님 환영합니다`}</S.HelloText>
      </S.LogoBox>
      <S.MenuBox>
        <S.MenuButton onClick={onClickLogin}>로그인</S.MenuButton>
        <S.MenuButton onClick={onClickSignUp}>회원가입</S.MenuButton>
      </S.MenuBox>
      <S.PointBox>
        <S.PointText>{`포인트 : 000P`}</S.PointText>
        <S.ChargeButton>포인트 충전하기</S.ChargeButton>
      </S.PointBox>
      <S.CircleBox>
        <S.Circle>
          <span>ONAIR</span>
          <span>ONAIR</span>
        </S.Circle>
      </S.CircleBox>
    </S.MainBox>
  );
}

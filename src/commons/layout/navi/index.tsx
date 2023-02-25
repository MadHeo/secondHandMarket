import { useRouter } from "next/router";
import * as S from "./navi.style";

export default function LayoutNavigation(): JSX.Element {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/home/");
  };

  const onClickMarket = () => {
    router.push("/market/list");
  };

  const onClickNewItem = () => {
    router.push("/market/new");
  };

  return (
    <S.MainBox>
      <S.LogoBox onClick={onClickLogo}>
        <img src="/image/logo.png" alt="" />
      </S.LogoBox>
      <S.MenuBox>
        <S.MenuButton onClick={onClickMarket}>상품 보기</S.MenuButton>
        <S.MenuButton onClick={onClickNewItem}>상품 등록</S.MenuButton>
      </S.MenuBox>
    </S.MainBox>
  );
}

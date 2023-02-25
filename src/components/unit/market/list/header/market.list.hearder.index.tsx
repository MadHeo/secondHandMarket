import * as S from "./market.list.hearder.style";

export default function MarketListHeader(props) {
  return (
    <>
      <S.MainBox>
        {props.children}
        <S.ButtonBox></S.ButtonBox>
      </S.MainBox>
    </>
  );
}

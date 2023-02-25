import Router from "next/dist/server/router";
import { useRouter } from "next/router";
import * as S from "./home.style";

export default function HomePageIndex(): JSX.Element {
  return (
    <>
      <S.MainBox>
        <S.BackgroundImageBox>
          <img src="/image/home.jpeg/" alt="" />
        </S.BackgroundImageBox>
      </S.MainBox>
    </>
  );
}

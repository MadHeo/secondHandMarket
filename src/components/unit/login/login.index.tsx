import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { gql } from "@apollo/client";
import * as S from "./login.style";
import { useMutationLoginUser } from "../../../hooks/api/mutation/useMutationLoginUser";

export default function LoginIndex(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const onClickLogin = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });

      const accessToken = result.data?.loginUser.accessToken;

      if (accessToken === undefined) {
        alert("토큰을 받아오지 못했습니다");
        return;
      }
      setAccessToken(accessToken);

      router.push("/market/list");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <div>
      <S.MainBox>
        <S.SubBox>
          <S.LoginImage src="/image/img_login.png/" alt="" />
          <S.InputBox>
            <S.Input
              type="email"
              placeholder="이메일 계정"
              onChange={onChangeEmail}
            ></S.Input>
            <S.Input
              type="password"
              placeholder="비밀번호"
              onChange={onChangePassword}
            ></S.Input>
            <S.LoginButton onClick={onClickLogin}>로그인</S.LoginButton>
          </S.InputBox>
        </S.SubBox>
      </S.MainBox>
    </div>
  );
}

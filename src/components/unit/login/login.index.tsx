import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ChangeEvent, useMemo, useState } from "react";
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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();

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
          <form onSubmit={handleSubmit(onClickLogin)}>
            <S.InputBox>
              <S.Input
                type="email"
                placeholder="이메일 계정"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "영문/숫자/특수문자가 포함되어야 합니다.",
                  },
                })}
              ></S.Input>
              <S.Input
                type="password"
                placeholder="비밀번호"
                {...register("password", {
                  required: "Required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{3,8}$/,
                    message: "영문/숫자/특수문자가 포함되어야 합니다.",
                  },
                })}
              ></S.Input>
              <S.LoginButton>로그인</S.LoginButton>
            </S.InputBox>
          </form>
        </S.SubBox>
      </S.MainBox>
    </div>
  );
}

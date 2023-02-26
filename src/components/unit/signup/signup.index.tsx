import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/types";
import * as S from "./signup.style";
import { gql } from "@apollo/client";
import { ISignUpData } from "./signup.type";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SignUpContainer(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickSignUp = async (data: ISignUpData) => {
    const result = await createUser({
      variables: {
        createUserInput: {
          email: data.email,
          password: data.password,
          name: data.name,
        },
      },
    });
    router.push("/login/");
    alert("회원가입이 완료 되었습니다.");
  };

  return (
    <div>
      <S.MainBox>
        <form onSubmit={handleSubmit(onClickSignUp)}>
          <S.SubBox>
            <S.SignupImage src="/image/img_signup.png" />
            <S.InputBox>
              <S.Input
                type="text"
                placeholder="이메일 계정"
                {...register("email")}
              ></S.Input>
              <S.ErrorMessage>{formState.errors.email?.message}</S.ErrorMessage>
              <S.Input
                type="text"
                placeholder="닉네임"
                {...register("name")}
              ></S.Input>
              <S.ErrorMessage>{formState.errors.name?.message}</S.ErrorMessage>
              <S.Input type="password" placeholder="비밀번호"></S.Input>
              <S.ErrorMessage>
                {formState.errors.password?.message}
              </S.ErrorMessage>
              <S.Input
                type="password"
                placeholder="비밀번호 재확인"
                {...register("password")}
              ></S.Input>
              <S.ErrorMessage>
                {formState.errors.password?.message}
              </S.ErrorMessage>
              <S.SignUpButton>회원가입</S.SignUpButton>
              <S.NaverButton>네이버 계정으로 가입</S.NaverButton>
              <S.KakaoButton>카카오 계정으로 가입</S.KakaoButton>
            </S.InputBox>
          </S.SubBox>
        </form>
      </S.MainBox>
    </div>
  );
}

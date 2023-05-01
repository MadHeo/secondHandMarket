import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import * as S from "./login.style";
import { useMutationLoginUser } from "../../../hooks/api/mutation/useMutationLoginUser";

interface IData {
  email: string;
  password: string;
}

export default function LoginIndex(): JSX.Element {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutationLoginUser();

  const onClickLogin = async (data: IData): Promise<void> => {
    try {
      const result = await loginUser({
        variables: { email: data.email, password: data.password },
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
                {...register("email")}
              ></S.Input>
              <S.Input
                type="password"
                placeholder="비밀번호"
                {...register("password")}
              ></S.Input>
              <S.LoginButton>로그인</S.LoginButton>
            </S.InputBox>
          </form>
        </S.SubBox>
      </S.MainBox>
    </div>
  );
}

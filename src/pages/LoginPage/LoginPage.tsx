import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import { SLoginPage } from "./LOginPage.style";

import { useNavigate } from "react-router-dom";

import * as yup from "yup"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../store/API/authApi";

const AuthFormScheme = yup.object({
  userEmail:
    yup.string()
      .required("Email обязателен")
      .email("Введите корректный email")
      .min(4, "Введите минимум 4 символа")
      .max(30, "Не больше 30 символов"),

  userPassword:
    yup.string()
      .required("Пароль обязателен")
      .min(6, "Минимум 6 символов")
      .max(30, "Не больше 30 символов")
})

export const LoginPage = () => {
  interface ILoginPage {
    userEmail: string,
    userPassword: string,
  }

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPage>({
    resolver: yupResolver(AuthFormScheme),
    defaultValues: {
      userEmail: "",
      userPassword: "",
    },
  });

  const [loginUser, { data: userData }] = useLoginUserMutation();

  const formData: SubmitHandler<ILoginPage> = async (data) => {
    const payload = {
      email: data.userEmail,
      password: data.userPassword,
    };
    loginUser(payload)
  }

  

  return (

    <SLoginPage>
      <AppHeader AppHeaderText="Авторизация" textType="h1" />
      <form  onSubmit={handleSubmit(formData)}>
        <Controller
          control={control}
          name="userEmail"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша почта"
              inputType="email"
              {...field}
              isError={errors.userEmail ? true : false}
              errorText={errors.userEmail?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller control={control} name="userPassword" render={({ field }) => (
          <AppInput
            inputPlaceholder="Пароль"
            inputType="password"
            {...field}
            isError={errors.userPassword ? true : false}
            errorText={errors.userPassword?.message}
            inputValue={field.value}
            onChange={field.onChange}
          />
        )}
        />

        <AppButton
          buttonText="Войти"
          buttonType="submit"
          isDisabled={false} />
      </form>
      <AppLink
        href="../ForgotPasswordPage"
        linkText="Забыли пароль?" />
      <IconsWrapper
        regLink="./RegistrationPage"
        regText="У вас нет аккаунта?"
        regHrefText="Зарегистрироваться"
        regEnterText="Войти с помощью" />
    </SLoginPage>
  );
};

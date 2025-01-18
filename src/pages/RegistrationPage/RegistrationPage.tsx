import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import { SLoginPage } from "../LoginPage/LOginPage.style";


export const RegistrationPage = () => {
  return (
    <SLoginPage>
      <AppHeader AppHeaderText="Регистрация" textType="h1" />
      <form action="#">
        <AppInput inputPlaceholder="Имя и фамилия" inputType="text" />
        <AppInput inputPlaceholder="Номер телкфона" inputType="tel" />
        <AppInput inputPlaceholder="Пароль" inputType="password" />

        <AppButton buttonText="Зарегистрироваться" buttonType="button" isDisabled={false} />
      </form>
      <IconsWrapper regLink="../" regText="Уже есть аккаунт?" regHrefText="Войти" regEnterText="Регистрация с помощью" />
    </SLoginPage>
  )
}
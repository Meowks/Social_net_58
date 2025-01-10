import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppLink } from "../../components/UI/AppLink/AppLink";
import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
        <AppHeader AppHeaderText="Авторизация" textType="h1"/>
      <form action="#">
        <AppInput inputPlaceholder="Номер телефона" inputType="tel"/>
        <AppInput inputPlaceholder="Пароль" inputType="password"/>
        <AppButton buttonText="Войти" buttonType="button" isDisabled={false}/>
      </form>
      <AppLink href="../ForgotPasswordPage" linkText="Забыли пароль?"/>
      <IconsWrapper regLink="RegistrationPage" regText="У вас нет аккаунта?" regHrefText="Зарегистрироваться" regEnterText="Войти с помощью"/>
    </div>
  );
};

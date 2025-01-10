import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppText } from "../../components/UI/AppText/AppText";
import "../LoginPage/LoginPage.scss";


export const ForgotPasswordPage = () => {
  return(
    <div className="LoginPage">
            <AppHeader AppHeaderText="Забыли пароль?" textType="h1"/>
            <AppText appText="Укажите свой номер телефона, чтобы получить код для сброса пароля."/>
          <form action="#">
            <AppInput inputPlaceholder="Номер телкфона" inputType="tel"/>

            <AppButton buttonText="Отправить" buttonType="button" isDisabled={false}/>
          </form>
        </div>
  )
}
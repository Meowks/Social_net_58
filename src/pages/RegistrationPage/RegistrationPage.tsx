import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { AppInput } from "../../components/UI/AppInput/AppInput";

import { IconsWrapper } from "../../components/UI/IconsWrapper/IconsWrapper";

import { SLoginPage } from "../LoginPage/LOginPage.style";

import { useNavigate } from "react-router-dom";

import * as yup from "yup"
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import {  useRegisterMutation } from "../../store/API/authApi";

import { IRegisterUserPayload } from "../../store/API/authApi";
import { useDispatch } from "react-redux";
import { changeUser } from "../../store/userSlice";

const registrationFormScheme = yup.object({

  name: yup
    .string()
    .required(),

  email: yup.string()
    .required("Email обязателен")
    .email("Введите корректный email")
    .min(4, "Введите минимум 4 символа")
    .max(30, "Не больше 30 символов"),

  phone_number: yup
    .string()
    .required(),

  password: yup.string()
    .required("Пароль обязателен")
    .min(6, "Минимум 6 символов")
    .max(30, "Не больше 30 символов"),

  user_city: yup
    .string()
    .required(),
})


export const RegistrationPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registerUser, { data: userData }] = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUserPayload>({
    resolver: yupResolver(registrationFormScheme),

    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      user_city: "",
    },
  });


  const formData: SubmitHandler<IRegisterUserPayload> = async (data) => {
    const payload = {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      password: data.password,
      user_city: data.user_city,
    };
    try {
      const response = await registerUser(payload).unwrap();
      if(response.user_id){
        dispatch(changeUser(payload))
        navigate("/")
      }
    } catch (error) {
      console.error("Ошибка " + error);
    }

  }


  return (

    <SLoginPage>
      <AppHeader
        AppHeaderText="Зарегестрироваться"
        textType="h1" />

      <form onSubmit={handleSubmit(formData)}>

        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваше имя"
              inputType="text"
              {...field}
              isError={errors.name ? true : false}
              errorText={errors.name?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваша почта"
              inputType="email"
              {...field}
              isError={errors.email ? true : false}
              errorText={errors.email?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="phone_number"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш номер"
              inputType="text"
              {...field}
              isError={errors.phone_number ? true : false}
              errorText={errors.phone_number?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Пароль"
              inputType="password"
              {...field}
              isError={errors.password ? true : false}
              errorText={errors.password?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="user_city"
          render={({ field }) => (
            <AppInput
              inputPlaceholder="Ваш город"
              inputType="text"
              {...field}
              isError={errors.user_city ? true : false}
              errorText={errors.user_city?.message}
              inputValue={field.value}
              onChange={field.onChange}
            />
          )}
        />

        <AppButton
          buttonText="Зарегистрироваться"
          buttonType="submit"
          isDisabled={false} />
      </form>

      <IconsWrapper
        regLink="./"
        regText="Уже есть аккаунт?"
        regHrefText="Войти"
        regEnterText="Регистрация с помощью" />
    </SLoginPage>
  );
};

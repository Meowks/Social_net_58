import { SAppInput } from "./AppInput.style";

type TAppInput = {
  inputType: "text" | "tel" | "password" | "email",
  inputPlaceholder: string,
  inputValue?: string,
  isError: boolean,
  errorText?: string,
  onChange: ()=>void,
};

export const AppInput = ({
  inputType,
  inputPlaceholder,
  inputValue,
  isError,
  errorText,
  onChange
}: TAppInput) => {
  return (
    <>
    <SAppInput
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={onChange}
    />
    {isError && <p>{errorText}</p>}
    </>
  );
};
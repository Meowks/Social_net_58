import { SAppInput } from "./AppInput.style";

type TAppInput = {
  inputType: "text" | "tel" | "password",
  inputPlaceholder: string,
  inputValue?: string,
};



export const AppInput = ({
  inputType,
  inputPlaceholder,
  inputValue
}: TAppInput) => {
  return (
    <SAppInput
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
    />
  );
};
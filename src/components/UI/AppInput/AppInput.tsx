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
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
    />
  );
};
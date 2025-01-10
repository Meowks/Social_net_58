type TAppButton = {
  buttonText: string,
  buttonType: "button" | "submit",
  buttonClick?: () => {},
  isDisabled:boolean,
}



export const AppButton = ({ buttonText, buttonType, buttonClick, isDisabled}: TAppButton) => {
  return (
    <button
      type={buttonType}
      disabled={isDisabled}
      onClick={buttonClick}
    >
      {buttonText}
    </button>
  )
}
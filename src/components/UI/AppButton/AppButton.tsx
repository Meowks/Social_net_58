import { SAppButton } from "./AppButton.style"

type TAppButton = {
  buttonText: string,
  buttonType: "button" | "submit",
  buttonClick?: () => {},
  isDisabled:boolean,
}


export const AppButton = ({ 
  buttonText, 
  buttonType, 
  buttonClick, 
  isDisabled}: TAppButton) => {
    
  return (
    <SAppButton
      type={buttonType}
      disabled={isDisabled}
      onClick={buttonClick}
      
    >
      {buttonText}
    </SAppButton>
  )
}
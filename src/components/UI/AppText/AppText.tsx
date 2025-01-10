type TAppText = {
  appText:string
}


export const AppText = ({appText}:TAppText)=>{
  return(
    <p>{appText}</p>
  )
}
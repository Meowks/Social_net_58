import React from "react"

type TLiNavbar = {
  liName:string,
  liVieBox:string,
  liId:string,
  liD:string,
  liText:string,
  liFillRule?:string,
  liClipRule?:string,
}& React.LiHTMLAttributes<HTMLLIElement>

export const LiOtherNavbar = ({
  liName,
  liVieBox,
  liId,
  liD,
  liText,
  liFillRule,
  liClipRule,
}:TLiNavbar)=>{
  return(
    <li className="navbar__item">
          <svg
            className={liName}
            viewBox={liVieBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id={liId}
              fillRule="evenodd"
              clipRule="evenodd"
              d={liD}
            />
          </svg>

          <p className="item__name">{liText}</p>
          <span className="Badge">100</span>
        </li>
  )
}
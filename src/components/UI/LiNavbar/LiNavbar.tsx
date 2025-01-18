import React from "react"
import { Badge } from "../Badge/Badge"

type TLiNavbar = {
  liName:string,
  liVieBox:string,
  liId:string,
  liD:string,
  liText:string,
}& React.LiHTMLAttributes<HTMLLIElement>

export const LiNavbar = ({
  liName,
  liVieBox,
  liId,
  liD,
  liText,
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
              d={liD}
            />
          </svg>
          <p className="item__name">{liText}</p>
          <Badge badgeText="1"/>
        </li>
  )
}
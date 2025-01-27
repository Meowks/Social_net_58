import React from "react";
import parse from "html-react-parser";
import { SLiNavbar } from "./LiNavbar.style";


type TLiNavbar = {
  navSvg:string,
  navText:string,
  navBadge:number,
} & React.LiHTMLAttributes<HTMLLIElement>

export const LiNavbar = ({
  navSvg,
  navText,
  navBadge,
}: TLiNavbar) => {
  return (
    <SLiNavbar>
      {parse(navSvg)}
      <p className="item__name">{navText}</p>
      <span className="Badge">{navBadge}</span>
    </SLiNavbar>
  )
}
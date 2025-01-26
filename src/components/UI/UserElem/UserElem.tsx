

import { SUserElem } from "./UserElem.style";

interface IUserElem {
  userImg: string;
  userMainText: string;
  userSecondaryText: string;
  classBadge?:string;
}

export const UserElem = ({ userImg, userMainText, userSecondaryText, classBadge }: IUserElem) => {
  return (
    <SUserElem>
      <img src={userImg} alt="User" />
      <div className="user__description">
        <p className="main__text">{userMainText}</p>
        <p className="secondary__text">{userSecondaryText}</p>
      </div>
      <span className={classBadge}>1</span> {/* Вместо пропса 'classBadge' = "Badge" /*}
      {/* <Badge badgeText="3"/> */}
    </SUserElem>
  )
}



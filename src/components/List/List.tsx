import { UserElem } from "../UI/UserElem/UserElem"
import { dataList } from "./dataList"
import { SList } from "./List.style"
import { dataRightList } from "./dataList"
import { AppHeader } from "../UI/AppHeader/AppHeader"


export const List = () => {
  return (
    <SList>
      <div className="List__title">
      <AppHeader AppHeaderText="Подписки" textType="h2"/>
        <span className="count">123</span>
      </div>
      {dataList.map((elem) => (
        <UserElem
          userImg={elem.listImg}
          userMainText={elem.listMain}
          userSecondaryText={elem.listSecondary}
          classBadge="Badge"
          badgeNumber="1"
        />
      ))}
      {/* <div className="UserElem">
            <img src="./img/profile/profile-img-1.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">N E W</p>
              <p className="secondary__text">Развитие</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-2.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">Aesthetics</p>
              <p className="secondary__text">Стиль</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-3.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">дом твоей эстетики</p>
              <p className="secondary__text">Творчество</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-4.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">wailet</p>
              <p className="secondary__text">Искусство</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-5.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">A W E S O M E</p>
              <p className="secondary__text">Стиль</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-6.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">minimalism</p>
              <p className="secondary__text">Фотография</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-7.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">Словарный запасE</p>
              <p className="secondary__text">Литература</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/profile/profile-img-8.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">Look</p>
              <p className="secondary__text">Мода</p>
            </div>
            <span className="Badge">3</span>
          </div> */}
    </SList>
  )
}

export const ListRight = () => {
  return (
    <SList>
      <div className="List__title">
        <AppHeader AppHeaderText="Близкие друзья" textType="h2"/>
        <span className="count">123</span>
      </div>
      {dataRightList.map((elem) => (
        <UserElem
          userImg={elem.listImg}
          userMainText={elem.listMain}
          userSecondaryText={elem.listSecondary}
          classBadge="Badge"
          badgeNumber="1"
        />
      ))}
    </SList>
  )
}
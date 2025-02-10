import { useCallback, useEffect, useState } from "react";
import { IPost, useDeletePostMutation, useLazyGetAllPostsQuery } from "../../store/API/postApi";

import { LeftSide } from "../../components/leftSide/LeftSide";
import { RightSide } from "../../components/RightSide/RightSide";

import { Post } from "../../components/Post/Post";
import { Header } from "../../components/UI/Header/Header";
import { SMainPage } from "./SMainPage.style";

import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import { History } from "../../components/History/History";
import { PostRepost } from "../../components/PostRepost/PostRepost";
import { EditPost } from "../PostPage/EditPost";

export const MainPage = () => {
  const [liked, setLiked] = useState(false);
  const [mark, setMark] = useState(false);

  const [likedPost, setLikedPost] = useState(false);
  const [markPost, setMarkPost] = useState(false);

  const [openEditPost, setOpenEditPost] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<IPost | null>();

  const [deletePost, {isSuccess}] = useDeletePostMutation()

  const onEditModalClose = useCallback(() => {
    setOpenEditPost(false);
  }, [])


  const [fetchTrigger, { data }] = useLazyGetAllPostsQuery()
  useEffect(() => {
    fetchTrigger(null);
  }, [data]);

  return (
    <>
      <Header />
      <SMainPage >
        <LeftSide />


        <main className="Main">
          <WhatsNew onNewPostAdded={() => fetchTrigger(null)} />
          <History />

          <PostRepost
            isMarked={markPost}
            isLiked={likedPost}
            likeClickPost={() => setLikedPost(!likedPost)}
            markClickPost={() => setMarkPost(!markPost)}
          />

          {!!data?.message.length && [...data.message].reverse().map((elem) => (
            <Post
              isLiked={liked}
              isMarked={mark}
              likeClick={() => setLiked(!liked)}
              markClick={() => setMark(!mark)}
              postText={elem.main_text}
              regDate={elem.reg_date}
              userName={elem.user_fk.name}
              onDeleteClick={() => {deletePost(elem.id)}}
              onEditClick={() => setOpenEditPost(true)}
              posiId={elem.id}

            />
          ))}
          {<EditPost
            isOpen={openEditPost}
            onClose={onEditModalClose}
            post={selectedPost}
          />}




        </main>

        <RightSide />
        {/* <aside className="RightSide">
        <div className="List">
          <div className="List__title">
            <h2>Близкие друзья</h2>
            <span className="count">123</span>
          </div>
          <div className="UserElem">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">Александр Майков</p>
              <p className="secondary__text _online">Онлайн</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">Александр Майков</p>
              <p className="secondary__text _online">Онлайн</p>
            </div>
            <span className="Badge">3</span>
          </div>
          <div className="UserElem">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="user__description">
              <p className="main__text">Александр Майков</p>
              <p className="secondary__text _online">Онлайн</p>
            </div>
            <span className="Badge">3</span>
          </div>
        </div>
        <div className="MusicBlock">
          <div className="MusicBlock__title">
            <h2>Вы недавно слушали</h2>
            <span>123</span>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-1.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Pieces</p>
              <p className="secondary__text">Andrew Belle</p>
            </div>
            <div className="plus-button _active"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-2.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">In the Wind</p>
              <p className="secondary__text">On-The-Go</p>
            </div>
            <div className="plus-button"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-3.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">On you own</p>
              <p className="secondary__text">Meltt</p>
            </div>
            <div className="plus-button _active"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-4.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Infinity</p>
              <p className="secondary__text">James Young</p>
            </div>
            <div className="plus-button"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-5.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Let me follow</p>
              <p className="secondary__text">Son Lux</p>
            </div>
            <div className="plus-button _active"></div>
          </div>
          <div className="MusicElem">
            <img src="./img/music/album-6.png" alt="Album" />
            <div className="music__description">
              <p className="main__text">Youth</p>
              <p className="secondary__text">Glass Animals</p>
            </div>
            <div className="plus-button"></div>
          </div>
        </div>
      </aside> */}
      </SMainPage>
    </>
  );
};


{/* <aside className="LeftSide">
        <nav className="Navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <svg
                className="icon icon-profile"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="prifole"
                  d="M12.5 21.5C9.375 21.5 6.6125 19.9 5 17.5C5.0375 15 10 13.625 12.5 13.625C15 13.625 19.9625 15 20 17.5C19.1736 18.7305 18.0573 19.7389 16.7495 20.4365C15.4416 21.134 13.9823 21.4992 12.5 21.5ZM12.5 3.75C13.4946 3.75 14.4484 4.14509 15.1517 4.84835C15.8549 5.55161 16.25 6.50544 16.25 7.5C16.25 8.49456 15.8549 9.44839 15.1517 10.1517C14.4484 10.8549 13.4946 11.25 12.5 11.25C11.5054 11.25 10.5516 10.8549 9.84835 10.1517C9.14509 9.44839 8.75 8.49456 8.75 7.5C8.75 6.50544 9.14509 5.55161 9.84835 4.84835C10.5516 4.14509 11.5054 3.75 12.5 3.75ZM12.5 0C10.8585 0 9.23303 0.323322 7.71646 0.951506C6.19989 1.57969 4.8219 2.50043 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C4.8219 22.4996 6.19989 23.4203 7.71646 24.0485C9.23303 24.6767 10.8585 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 5.5875 19.375 0 12.5 0Z"
                />
              </svg>
              <p className="item__name">Моя страница</p>
              <span className="Badge">1</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-news"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="news">
                  <path d="M23.1208 5H22.0042L22.0012 5.00141L22 5.00482V21.2857C22 21.7404 22.158 22.1764 22.4393 22.4979C22.7206 22.8194 23.1022 23 23.5 23C23.8978 23 24.2794 22.8194 24.5607 22.4979C24.842 22.1764 25 21.7404 25 21.2857V7.14768C25 6.57808 24.802 6.03181 24.4496 5.62904C24.0972 5.22627 23.6192 5 23.1208 5Z" />
                  <path d="M19.36 21.4286V2.23214C19.36 1.93901 19.3031 1.64875 19.1925 1.37794C19.082 1.10712 18.9199 0.861053 18.7156 0.653779C18.5113 0.446506 18.2688 0.282087 18.0019 0.169912C17.735 0.0577361 17.4489 0 17.16 0H2.2C1.61652 0 1.05695 0.235171 0.644365 0.653779C0.231785 1.07239 0 1.64014 0 2.23214V21.875C0 22.7038 0.324499 23.4987 0.902111 24.0847C1.47972 24.6708 2.26313 25 3.08 25H21.9367C21.9451 25.0001 21.9533 24.9985 21.961 24.9953C21.9687 24.9921 21.9757 24.9873 21.9816 24.9814C21.9875 24.9754 21.9922 24.9683 21.9953 24.9605C21.9985 24.9527 22.0001 24.9443 22 24.9358C22 24.9218 21.9954 24.9082 21.9869 24.8971C21.9785 24.886 21.9666 24.878 21.9532 24.8744C21.2088 24.6673 20.552 24.2179 20.0836 23.5955C19.6151 22.973 19.3609 22.2118 19.36 21.4286ZM3.52 5.35714C3.52 5.12034 3.61271 4.89324 3.77775 4.7258C3.94278 4.55835 4.16661 4.46429 4.4 4.46429H7.92C8.15339 4.46429 8.37722 4.55835 8.54225 4.7258C8.70729 4.89324 8.8 5.12034 8.8 5.35714V8.92857C8.8 9.16537 8.70729 9.39247 8.54225 9.55992C8.37722 9.72736 8.15339 9.82143 7.92 9.82143H4.4C4.16661 9.82143 3.94278 9.72736 3.77775 9.55992C3.61271 9.39247 3.52 9.16537 3.52 8.92857V5.35714ZM14.96 20.5357H4.42475C3.9512 20.5357 3.54475 20.1663 3.5211 19.6858C3.51537 19.5651 3.53385 19.4445 3.57543 19.3312C3.61701 19.2179 3.68082 19.1144 3.763 19.0269C3.84518 18.9394 3.94401 18.8698 4.0535 18.8222C4.163 18.7746 4.28088 18.75 4.4 18.75H14.9352C15.4088 18.75 15.8152 19.1194 15.8389 19.5999C15.8446 19.7206 15.8261 19.8413 15.7846 19.9545C15.743 20.0678 15.6792 20.1713 15.597 20.2588C15.5148 20.3463 15.416 20.416 15.3065 20.4636C15.197 20.5112 15.0791 20.5357 14.96 20.5357ZM14.96 16.9643H4.42475C3.9512 16.9643 3.54475 16.5949 3.5211 16.1144C3.51537 15.9937 3.53385 15.873 3.57543 15.7598C3.61701 15.6465 3.68082 15.543 3.763 15.4555C3.84518 15.368 3.94401 15.2983 4.0535 15.2507C4.163 15.2031 4.28088 15.1786 4.4 15.1786H14.9352C15.4088 15.1786 15.8152 15.548 15.8389 16.0285C15.8446 16.1492 15.8261 16.2698 15.7846 16.3831C15.743 16.4963 15.6792 16.5999 15.597 16.6874C15.5148 16.7749 15.416 16.8445 15.3065 16.8921C15.197 16.9397 15.0791 16.9643 14.96 16.9643ZM14.96 13.3929H4.42475C3.9512 13.3929 3.54475 13.0234 3.5211 12.543C3.51537 12.4222 3.53385 12.3016 3.57543 12.1883C3.61701 12.0751 3.68082 11.9716 3.763 11.8841C3.84518 11.7966 3.94401 11.7269 4.0535 11.6793C4.163 11.6317 4.28088 11.6072 4.4 11.6071H14.9352C15.4088 11.6071 15.8152 11.9766 15.8389 12.457C15.8446 12.5778 15.8261 12.6984 15.7846 12.8117C15.743 12.9249 15.6792 13.0284 15.597 13.1159C15.5148 13.2034 15.416 13.2731 15.3065 13.3207C15.197 13.3683 15.0791 13.3928 14.96 13.3929ZM14.96 9.82143H11.4647C10.9912 9.82143 10.5847 9.45201 10.5611 8.97154C10.5554 8.85082 10.5739 8.73017 10.6154 8.61691C10.657 8.50365 10.7208 8.40013 10.803 8.31263C10.8852 8.22514 10.984 8.15548 11.0935 8.10787C11.203 8.06027 11.3209 8.03572 11.44 8.03571H14.9352C15.4088 8.03571 15.8152 8.40513 15.8389 8.8856C15.8446 9.00632 15.8261 9.12697 15.7846 9.24023C15.743 9.35349 15.6792 9.45701 15.597 9.54451C15.5148 9.63201 15.416 9.70167 15.3065 9.74927C15.197 9.79687 15.0791 9.82142 14.96 9.82143ZM14.96 6.25H11.4647C10.9912 6.25 10.5847 5.88058 10.5611 5.40011C10.5554 5.27939 10.5739 5.15874 10.6154 5.04548C10.657 4.93222 10.7208 4.8287 10.803 4.74121C10.8852 4.65371 10.984 4.58405 11.0935 4.53645C11.203 4.48885 11.3209 4.4643 11.44 4.46429H14.9352C15.4088 4.46429 15.8152 4.8337 15.8389 5.31417C15.8446 5.4349 15.8261 5.55554 15.7846 5.6688C15.743 5.78206 15.6792 5.88558 15.597 5.97308C15.5148 6.06058 15.416 6.13024 15.3065 6.17784C15.197 6.22544 15.0791 6.24999 14.96 6.25Z" />
                </g>
              </svg>
              <p className="item__name">Новости</p>
              <span className="Badge">2</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-chat"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="chat"
                  d="M7.80602 0.935056C18.5451 -3.38192 29.1413 8.06868 23.3711 18.4999C20.7497 23.2374 14.2384 27.0528 6.6562 23.4445L1.38542 24.9567C0.567935 25.1912 -0.188051 24.4351 0.0417887 23.6135C0.35611 22.4869 1.10154 19.8306 1.53761 18.3907C-1.73108 12.5341 0.473514 3.88208 7.80602 0.935056ZM7.47058 10.1673C7.47058 10.5977 7.81844 10.9471 8.24706 10.9471H16.6356C16.8415 10.9471 17.039 10.8649 17.1846 10.7187C17.3303 10.5724 17.4121 10.3741 17.4121 10.1673C17.4121 9.96046 17.3303 9.76211 17.1846 9.61587C17.039 9.46963 16.8415 9.38747 16.6356 9.38747H8.24706C7.81844 9.38747 7.47058 9.73682 7.47058 10.1673ZM8.24955 14.0501C8.04361 14.0501 7.84611 14.1322 7.70049 14.2785C7.55487 14.4247 7.47306 14.623 7.47306 14.8299C7.47306 15.0367 7.55487 15.235 7.70049 15.3813C7.84611 15.5275 8.04361 15.6097 8.24955 15.6097H14.1508C14.3568 15.6097 14.5543 15.5275 14.6999 15.3813C14.8455 15.235 14.9273 15.0367 14.9273 14.8299C14.9273 14.623 14.8455 14.4247 14.6999 14.2785C14.5543 14.1322 14.3568 14.0501 14.1508 14.0501H8.24955Z"
                />
              </svg>

              <p className="item__name">Чаты</p>
              <span className="Badge">3</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-friends"
                viewBox="0 0 29 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="ftiends"
                  d="M8.7 11.7647C10.2383 11.7647 11.7135 11.145 12.8012 10.0418C13.8889 8.93865 14.5 7.44245 14.5 5.88235C14.5 4.32226 13.8889 2.82606 12.8012 1.7229C11.7135 0.619746 10.2383 0 8.7 0C7.16174 0 5.68649 0.619746 4.59878 1.7229C3.51107 2.82606 2.9 4.32226 2.9 5.88235C2.9 7.44245 3.51107 8.93865 4.59878 10.0418C5.68649 11.145 7.16174 11.7647 8.7 11.7647ZM21.75 11.7647C22.9037 11.7647 24.0101 11.2999 24.8259 10.4725C25.6417 9.64516 26.1 8.52301 26.1 7.35294C26.1 6.18287 25.6417 5.06072 24.8259 4.23335C24.0101 3.40599 22.9037 2.94118 21.75 2.94118C20.5963 2.94118 19.4899 3.40599 18.6741 4.23335C17.8583 5.06072 17.4 6.18287 17.4 7.35294C17.4 8.52301 17.8583 9.64516 18.6741 10.4725C19.4899 11.2999 20.5963 11.7647 21.75 11.7647ZM3.2625 14.7059C2.39723 14.7059 1.5674 15.0545 0.955564 15.675C0.343727 16.2955 0 17.1372 0 18.0147V18.3824C0 18.3824 0 25 8.7 25C17.4 25 17.4 18.3824 17.4 18.3824V18.0147C17.4 17.1372 17.0563 16.2955 16.4444 15.675C15.8326 15.0545 15.0028 14.7059 14.1375 14.7059H3.2625ZM21.75 22.7941C20.0521 22.7941 18.7514 22.5279 17.7553 22.1206C18.335 21.1282 18.6988 20.0216 18.8225 18.875C18.8366 18.7357 18.8458 18.5959 18.85 18.4559V18.0147C18.8518 16.7827 18.3831 15.5978 17.5421 14.7088C17.5914 14.7067 17.6407 14.7058 17.69 14.7059H25.81C26.656 14.7059 27.4674 15.0467 28.0657 15.6535C28.6639 16.2602 29 17.0831 29 17.9412C29 17.9412 29 22.7941 21.75 22.7941Z"
                />
              </svg>
              <p className="item__name">Друзья</p>
              <span className="Badge">4</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-group"
                viewBox="0 0 29 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="group"
                  d="M18.875 16.6595C20.002 16.6595 20.9167 17.5925 20.9167 18.742V21.1243L20.9073 21.2528C20.5457 23.7839 18.3173 25 14.5782 25C10.853 25 8.5885 23.7981 8.09967 21.2968L8.08333 21.1219V18.742C8.08333 17.5925 8.998 16.6595 10.125 16.6595H18.875ZM19.4513 9.51973H26.4583C27.5853 9.51973 28.5 10.4527 28.5 11.6022V13.9845L28.4907 14.113C28.129 16.6441 25.9007 17.8602 22.1615 17.8602L21.9655 17.8578C21.7857 17.2057 21.4119 16.6264 20.8958 16.2C20.3797 15.7735 19.7466 15.5208 19.0838 15.4767L18.875 15.4696H17.7993C18.409 14.9682 18.9007 14.3338 19.2382 13.613C19.5758 12.8922 19.7507 12.1035 19.75 11.3047C19.75 10.6788 19.645 10.079 19.4513 9.51973ZM2.54167 9.51973H9.54867C9.355 10.079 9.25 10.6788 9.25 11.3047C9.25 12.8873 9.92433 14.3117 10.9953 15.2911L11.2007 15.4696H10.125C8.65267 15.4696 7.41133 16.481 7.03333 17.8614L6.99483 17.8602C3.26967 17.8602 1.00517 16.6583 0.516333 14.157L0.5 13.9821V11.6022C0.5 10.4527 1.41467 9.51973 2.54167 9.51973ZM14.5 7.1398C15.583 7.1398 16.6216 7.5786 17.3874 8.35966C18.1531 9.14073 18.5833 10.2001 18.5833 11.3047C18.5833 12.4093 18.1531 13.4686 17.3874 14.2497C16.6216 15.0308 15.583 15.4696 14.5 15.4696C13.417 15.4696 12.3784 15.0308 11.6126 14.2497C10.8469 13.4686 10.4167 12.4093 10.4167 11.3047C10.4167 10.2001 10.8469 9.14073 11.6126 8.35966C12.3784 7.5786 13.417 7.1398 14.5 7.1398ZM22.0833 0C23.1663 0 24.2049 0.438799 24.9707 1.21987C25.7365 2.00093 26.1667 3.06029 26.1667 4.16488C26.1667 5.26948 25.7365 6.32883 24.9707 7.1099C24.2049 7.89096 23.1663 8.32976 22.0833 8.32976C21.0004 8.32976 19.9618 7.89096 19.196 7.1099C18.4302 6.32883 18 5.26948 18 4.16488C18 3.06029 18.4302 2.00093 19.196 1.21987C19.9618 0.438799 21.0004 0 22.0833 0ZM6.91667 0C7.99963 0 9.03825 0.438799 9.80402 1.21987C10.5698 2.00093 11 3.06029 11 4.16488C11 5.26948 10.5698 6.32883 9.80402 7.1099C9.03825 7.89096 7.99963 8.32976 6.91667 8.32976C5.8337 8.32976 4.79509 7.89096 4.02931 7.1099C3.26354 6.32883 2.83333 5.26948 2.83333 4.16488C2.83333 3.06029 3.26354 2.00093 4.02931 1.21987C4.79509 0.438799 5.8337 0 6.91667 0Z"
                />
              </svg>
              <p className="item__name">Группы</p>
              <span className="Badge">5</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-photo"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="photo"
                  d="M25 17.5V2.5C25 1.125 23.875 0 22.5 0H7.5C6.125 0 5 1.125 5 2.5V17.5C5 18.875 6.125 20 7.5 20H22.5C23.875 20 25 18.875 25 17.5ZM11.25 12.5L13.7875 15.8875L17.5 11.25L22.5 17.5H7.5L11.25 12.5ZM0 5V22.5C0 23.875 1.125 25 2.5 25H20V22.5H2.5V5H0Z"
                />
              </svg>
              <p className="item__name">Фотографии</p>
              <span className="Badge">6</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-video"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="video"
                  d="M13.8125 14.375L19 11.0625C19.3958 10.8125 19.5937 10.4583 19.5937 10C19.5937 9.54167 19.3958 9.1875 19 8.9375L13.8125 5.625C13.3958 5.33333 12.9687 5.3125 12.5312 5.5625C12.0937 5.8125 11.875 6.17708 11.875 6.65625V13.3437C11.875 13.8229 12.0937 14.1875 12.5312 14.4375C12.9687 14.6875 13.3958 14.6667 13.8125 14.375ZM7.5 20C6.8125 20 6.22375 19.755 5.73375 19.265C5.24375 18.775 4.99917 18.1867 5 17.5V2.5C5 1.8125 5.245 1.22375 5.735 0.733752C6.225 0.243752 6.81333 -0.000831211 7.5 2.12224e-06H22.5C23.1875 2.12224e-06 23.7762 0.245002 24.2662 0.735002C24.7562 1.225 25.0008 1.81333 25 2.5V17.5C25 18.1875 24.755 18.7762 24.265 19.2662C23.775 19.7562 23.1867 20.0008 22.5 20H7.5ZM2.5 25C1.8125 25 1.22375 24.755 0.733752 24.265C0.243752 23.775 -0.000831211 23.1867 2.12224e-06 22.5V6.25C2.12224e-06 5.89583 0.120002 5.59875 0.360002 5.35875C0.600002 5.11875 0.896669 4.99917 1.25 5C1.60417 5 1.90125 5.12 2.14125 5.36C2.38125 5.6 2.50083 5.89667 2.5 6.25V22.5H18.75C19.1042 22.5 19.4012 22.62 19.6412 22.86C19.8812 23.1 20.0008 23.3967 20 23.75C20 24.1042 19.88 24.4012 19.64 24.6412C19.4 24.8812 19.1033 25.0008 18.75 25H2.5Z"
                />
              </svg>
              <p className="item__name">Видео</p>
              <span className="Badge">7</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-music-playlist"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="music"
                  d="M22.5 0H7.5C6.125 0 5 1.125 5 2.5V17.5C5 18.875 6.125 20 7.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM20 6.25H16.25V13.125C16.25 13.9538 15.9208 14.7487 15.3347 15.3347C14.7487 15.9208 13.9538 16.25 13.125 16.25C12.2962 16.25 11.5013 15.9208 10.9153 15.3347C10.3292 14.7487 10 13.9538 10 13.125C10 12.2962 10.3292 11.5013 10.9153 10.9153C11.5013 10.3292 12.2962 10 13.125 10C13.8375 10 14.475 10.2375 15 10.6375V3.75H20V6.25ZM2.5 5H0V22.5C0 23.875 1.125 25 2.5 25H20V22.5H2.5V5Z"
                />
              </svg>
              <p className="item__name">Музыка</p>
              <span className="Badge">8</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-mark"
                viewBox="0 0 21 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="mark"
                  d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                />
              </svg>
              <p className="item__name">Сохраненное</p>
              <span className="Badge">9</span>
            </li>
            <li className="navbar__item">
              <svg
                className="icon icon-other"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="other"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25ZM6.00481 10.75L12.5 16L18.9952 10.75H6.00481Z"
                />
              </svg>

              <p className="item__name">Другое</p>
              <span className="Badge">100</span>
            </li>
          </ul>
        </nav>
        <div className="List">
          <div className="List__title">
            <h2>Подписки</h2>
            <span className="count">123</span>
          </div>
          <div className="UserElem">
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
          </div>
        </div>
      </aside>  */}

{/* <div className="WhatsNew">
            <img src="./img/users/arina-volkova.jpeg" alt="User" />
            <AppInput
              inputPlaceholder="Что у вас нового?"
              inputType="text"
              name="whats-new"
              id="whats-new"
              style={{ marginBottom: 0 }}
            />

            <div className="icons-wrapper">
              <svg
                className="icon icon-camera"
                viewBox="0 0 26 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M21.2727 7.2V4.8H18.9091V2.4H21.2727V0H23.6364V2.4H26V4.8H23.6364V7.2H21.2727ZM2.36364 24C1.71364 24 1.157 23.7648 0.693729 23.2944C0.230457 22.824 -0.000785872 22.2592 2.00648e-06 21.6V7.2C2.00648e-06 6.54 0.231638 5.9748 0.694911 5.5044C1.15818 5.034 1.71443 4.7992 2.36364 4.8H6.08637L8.27273 2.4H15.3636V4.8H9.30682L7.15 7.2H2.36364V21.6H21.2727V10.8H23.6364V21.6C23.6364 22.26 23.4047 22.8252 22.9415 23.2956C22.4782 23.766 21.9219 24.0008 21.2727 24H2.36364ZM11.8182 19.8C13.2955 19.8 14.5513 19.2748 15.5858 18.2244C16.6203 17.174 17.1372 15.8992 17.1364 14.4C17.1364 12.9 16.6191 11.6248 15.5846 10.5744C14.5502 9.524 13.2947 8.9992 11.8182 9C10.3409 9 9.08503 9.5252 8.05055 10.5756C7.01606 11.626 6.49921 12.9008 6.5 14.4C6.5 15.9 7.01724 17.1752 8.05173 18.2256C9.08621 19.276 10.3417 19.8008 11.8182 19.8ZM11.8182 17.4C10.9909 17.4 10.2917 17.11 9.72046 16.53C9.14924 15.95 8.86364 15.24 8.86364 14.4C8.86364 13.56 9.14924 12.85 9.72046 12.27C10.2917 11.69 10.9909 11.4 11.8182 11.4C12.6455 11.4 13.3447 11.69 13.9159 12.27C14.4871 12.85 14.7727 13.56 14.7727 14.4C14.7727 15.24 14.4871 15.95 13.9159 16.53C13.3447 17.11 12.6455 17.4 11.8182 17.4Z"
                />
              </svg>
              <svg
                className="icon icon-play-history"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M10.8182 16.285C10.4141 16.5503 10 16.5707 9.57576 16.3462C9.15152 16.1218 8.93939 15.7646 8.93939 15.2749V8.72455C8.93939 8.2348 9.15152 7.87769 9.57576 7.65323C10 7.42876 10.4141 7.44917 10.8182 7.71445L15.8485 10.959C16.0303 11.0814 16.1669 11.2345 16.2582 11.4181C16.3495 11.6018 16.3947 11.7957 16.3939 11.9997C16.3939 12.2038 16.3487 12.3976 16.2582 12.5813C16.1677 12.765 16.0311 12.918 15.8485 13.0404L10.8182 16.285ZM9.36364 23.9679C8.65657 23.8046 7.97455 23.5904 7.31758 23.3251C6.66061 23.0598 6.01939 22.7231 5.39394 22.315C5.07071 22.1109 4.89414 21.8253 4.86424 21.4579C4.83434 21.0906 4.9604 20.7641 5.24242 20.4785C5.44445 20.2744 5.70222 20.1569 6.01576 20.1258C6.32929 20.0948 6.61697 20.1613 6.87879 20.3254C7.32323 20.6111 7.78263 20.8511 8.25697 21.0453C8.73131 21.2396 9.22141 21.3975 9.72727 21.5192C10.0101 21.6008 10.2477 21.7591 10.44 21.9942C10.6323 22.2293 10.7281 22.4893 10.7273 22.7741C10.7273 23.1823 10.5911 23.5039 10.3188 23.7389C10.0465 23.974 9.72808 24.0503 9.36364 23.9679ZM3.51515 18.7337C3.23232 19.0194 2.91394 19.1472 2.56 19.117C2.20606 19.0868 1.92849 18.9182 1.72727 18.6113C1.32323 18.0195 0.98505 17.3922 0.712727 16.7294C0.440404 16.0667 0.22303 15.3675 0.0606062 14.6321C-0.0404039 14.2648 0.0254545 13.9383 0.258182 13.6526C0.490909 13.3669 0.808889 13.2241 1.21212 13.2241C1.49495 13.2241 1.75758 13.3261 2 13.5302C2.24242 13.7342 2.40404 13.9791 2.48485 14.2648C2.60606 14.7954 2.76768 15.2953 2.9697 15.7646C3.17172 16.234 3.40404 16.6931 3.66667 17.1421C3.82828 17.3869 3.89414 17.6624 3.86424 17.9685C3.83434 18.2746 3.71798 18.5297 3.51515 18.7337ZM1.24242 10.7754C0.838384 10.7754 0.515152 10.6325 0.272727 10.3468C0.0303031 10.0611 -0.0505051 9.73465 0.030303 9.36734C0.191919 8.65313 0.414141 7.95401 0.69697 7.27C0.979798 6.58599 1.32323 5.9485 1.72727 5.35754C1.92929 5.05145 2.20727 4.8882 2.56121 4.8678C2.91515 4.84739 3.23313 4.98003 3.51515 5.26572C3.71717 5.46978 3.83354 5.72485 3.86424 6.03094C3.89495 6.33704 3.82909 6.61252 3.66667 6.85739C3.40404 7.28592 3.17172 7.73975 2.9697 8.21888C2.76768 8.69802 2.60606 9.20327 2.48485 9.73465C2.40404 10.0203 2.24727 10.2652 2.01455 10.4693C1.78182 10.6733 1.52444 10.7754 1.24242 10.7754ZM14.4848 23.9373C14.1212 24.0189 13.8081 23.9475 13.5455 23.723C13.2828 23.4986 13.1515 23.1925 13.1515 22.8047C13.1515 22.5191 13.2477 22.2538 13.44 22.0089C13.6323 21.764 13.8695 21.6008 14.1515 21.5192C16.3131 20.9478 18.0909 19.7899 19.4848 18.0456C20.8788 16.3013 21.5758 14.286 21.5758 11.9997C21.5758 9.71424 20.8788 7.68384 19.4848 5.90851C18.0909 4.13318 16.3131 2.98023 14.1515 2.44968C13.8687 2.36805 13.6311 2.2097 13.4388 1.97462C13.2465 1.73955 13.1507 1.47957 13.1515 1.1947C13.1515 0.806987 13.2881 0.495998 13.5612 0.261737C13.8343 0.0274748 14.1523 -0.0492523 14.5152 0.0315558C17.2828 0.643738 19.5556 2.06196 21.3333 4.28622C23.1111 6.51049 24 9.08165 24 11.9997C24 14.8974 23.1063 17.4481 21.3188 19.652C19.5313 21.8559 17.2533 23.2843 14.4848 23.9373ZM6.78788 3.70465C6.52525 3.8679 6.24727 3.92912 5.95394 3.88831C5.66061 3.84749 5.41333 3.72506 5.21212 3.521C4.92929 3.23531 4.80283 2.90881 4.83273 2.5415C4.86263 2.17419 5.0396 1.88851 5.36364 1.68445C5.9899 1.27633 6.63636 0.939627 7.30303 0.674348C7.9697 0.409068 8.65657 0.194804 9.36364 0.0315558C9.72727 -0.0500686 10.0457 0.0266585 10.3188 0.261737C10.5919 0.496815 10.7281 0.807803 10.7273 1.1947C10.7273 1.48039 10.6263 1.74077 10.4242 1.97585C10.2222 2.21093 9.9798 2.36887 9.69697 2.44968C9.19192 2.57211 8.69697 2.74067 8.21212 2.95534C7.72727 3.17001 7.25253 3.4206 6.78788 3.70465Z"
                />
              </svg>
              <svg
                className="icon icon-music"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M24 2.54971V17.6242C23.9998 18.7471 23.6325 19.8386 22.9553 20.7293C22.278 21.62 21.3286 22.2603 20.2542 22.5507C19.1799 22.8412 18.0406 22.7656 17.0131 22.3358C15.9856 21.9059 15.1273 21.1457 14.5713 20.1732C14.0153 19.2006 13.7927 18.07 13.9379 16.9567C14.0832 15.8434 14.5883 14.8096 15.3748 14.0156C16.1613 13.2216 17.1853 12.7118 18.288 12.5653C19.3907 12.4188 20.5105 12.6437 21.4737 13.2051V7.65232L8.84198 9.77703V18.8995C8.84198 18.976 8.83567 19.0487 8.82304 19.1214C8.91372 20.1021 8.68058 21.0855 8.15993 21.9185C7.63929 22.7515 6.86038 23.3872 5.94455 23.7266C5.02873 24.066 4.02744 24.0901 3.09667 23.795C2.1659 23.4999 1.35794 22.9023 0.798654 22.0953C0.239371 21.2883 -0.0398186 20.3171 0.0045837 19.3332C0.048986 18.3492 0.414486 17.4077 1.04414 16.6554C1.67379 15.903 2.53224 15.3821 3.48572 15.1737C4.43921 14.9653 5.43419 15.0812 6.31565 15.5033V4.67569C6.31557 4.0719 6.52765 3.48766 6.91415 3.02691C7.30066 2.56616 7.83651 2.25878 8.4264 2.15945L21.0581 0.0347476C21.4199 -0.02618 21.7906 -0.00681253 22.1443 0.0915035C22.498 0.18982 22.8262 0.364725 23.1062 0.604062C23.3861 0.843399 23.6111 1.14143 23.7655 1.47742C23.9198 1.81342 23.9999 2.17933 24 2.54971ZM4.4209 17.6242C3.91838 17.6242 3.43644 17.8257 3.0811 18.1845C2.72577 18.5432 2.52614 19.0298 2.52614 19.5372C2.52614 20.0445 2.72577 20.5311 3.0811 20.8899C3.43644 21.2486 3.91838 21.4502 4.4209 21.4502C4.92341 21.4502 5.40535 21.2486 5.76069 20.8899C6.11602 20.5311 6.31565 20.0445 6.31565 19.5372C6.31565 19.0298 6.11602 18.5432 5.76069 18.1845C5.40535 17.8257 4.92341 17.6242 4.4209 17.6242ZM18.9473 15.0735C18.2773 15.0735 17.6347 15.3422 17.1609 15.8206C16.6872 16.2989 16.421 16.9477 16.421 17.6242C16.421 18.3006 16.6872 18.9494 17.1609 19.4278C17.6347 19.9061 18.2773 20.1748 18.9473 20.1748C19.6174 20.1748 20.2599 19.9061 20.7337 19.4278C21.2075 18.9494 21.4737 18.3006 21.4737 17.6242C21.4737 16.9477 21.2075 16.2989 20.7337 15.8206C20.2599 15.3422 19.6174 15.0735 18.9473 15.0735ZM21.4737 2.54971L8.84198 4.67569V7.19192L21.4737 5.06594V2.54971Z"
                />
              </svg>
            </div>
          </div> */}

{/* <div className="History">
            <svg
              className="icon icon-slider-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
            >
              <g>
                <g>
                  <path
                    d="M72,36c0,19.9-16.1,36-36,36S0,55.9,0,36,16.1,0,36,0s36,16.1,36,36Z"
                    style={{ fill: "#fcfcff" }}
                  />
                  <path
                    d="M38.8,46.2c-.4-.4-.5-.9-.5-1.4s.2-1,.6-1.4l5.2-5.5H23.4c-.5,0-1-.2-1.3-.6-.4-.4-.5-.8-.5-1.4,0-.5,.2-1,.5-1.4,.4-.4,.8-.6,1.3-.6h20.6l-5.3-5.5c-.4-.4-.6-.8-.6-1.4,0-.5,.2-1,.6-1.4,.4-.4,.8-.6,1.3-.6s.9,.2,1.3,.6l8.5,8.9c.2,.2,.3,.4,.4,.6,.1,.2,.1,.5,.1,.7,0,.3,0,.5-.1,.7s-.2,.4-.4,.6l-8.5,8.9c-.3,.4-.8,.5-1.3,.5-.4,.3-.8,.1-1.2-.3Z"
                    style={{ fill: "#526ed3" }}
                  />
                </g>
              </g>
            </svg>
            <div className="History__wrapper">
              <div className="History__item add-history">
                <div className="icon-wrapper">
                  <svg
                    className="icon icon-plus"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <g>
                      <path d="M13,8h-5v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-5H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29H6V1c0-.27,.11-.52,.29-.71,.19-.19,.44-.29,.71-.29s.52,.11,.71,.29c.19,.19,.29,.44,.29,.71V6h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71s-.11,.52-.29,.71c-.19,.19-.44,.29-.71,.29Z" />
                    </g>
                  </svg>
                  <span>История</span>
                </div>
                <img src="./img/users/andrey-kashirskiy.jpeg" alt="Add History" />
              </div>
              <div className="History__item">
                <img src="./img/history/poster-1.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/aleksandr-maykov.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Александр Майков</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-2.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/darya-gertner.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Дарья Гертнер</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-3.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/denis-frolov.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Денис Фролов</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-4.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/katarina-fisher.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Катарина Фишер</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-1.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/aleksandr-maykov.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Александр Майков</span>
                </div>
              </div>
              <div className="History__item">
                <img src="./img/history/poster-2.jpeg" alt="History Poster" />
                <div className="History__owner">
                  <img
                    className="owner__img"
                    src="./img/users/darya-gertner.jpeg"
                    alt="History Owner"
                  />
                  <span className="owner__name">Дарья Гертнер</span>
                </div>
              </div>
            </div>
          </div> */}





{/* <div className="Post _liked _marked">
          <div className="UserElem">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="user__description">
              <a href="#" className="main__text">
                Александр Майков
              </a>
              <p className="secondary__text">Сегодня 9:37</p>
            </div>
          </div>
          <p className="Post__text">Момент умиротворения и спокойствия</p>
          <div className="media-container">
            <img
              className="media__item"
              src="./img/post/nature-1.png"
              alt="Post Item"
            />
            <img
              className="media__item"
              src="./img/post/nature-2.png"
              alt="Post Item"
            />
            <img
              className="media__item"
              src="./img/post/nature-3.png"
              alt="Post Item"
            />
            <img
              className="media__item"
              src="./img/post/nature-4.png"
              alt="Post Item"
            />
            <img
              className="media__item"
              src="./img/post/nature-5.png"
              alt="Post Item"
            />
            <img
              className="media__item"
              src="./img/post/nature-6.png"
              alt="Post Item"
            />
          </div>
          <div className="PostControls">
            <div className="icon-wrapper like">
              <span className="count likes-count">-500</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <div className="icon-wrapper comment">
              <span className="count comments-count">500</span>
              <svg
                className="icon icon-comment"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="comment"
                  d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                  fill="#6D6F7A"
                />
              </svg>
            </div>
            <div className="icon-wrapper repost">
              <svg
                className="icon icon-repost"
                viewBox="0 0 32 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M31.1767 11.6881L20.105 0.818783C19.9503 0.666682 19.753 0.563052 19.5383 0.520999C19.3235 0.478945 19.1009 0.500357 18.8985 0.582526C18.6962 0.664696 18.5232 0.803931 18.4014 0.982625C18.2797 1.16132 18.2146 1.37144 18.2145 1.58643V7.06864C14.6246 7.37026 10.6595 9.09577 7.39755 11.8117C3.46988 15.0834 1.02443 19.2993 0.510988 23.6824C0.470864 24.0231 0.541243 24.3676 0.712109 24.6669C0.882976 24.9661 1.14562 25.2048 1.46267 25.349C1.77972 25.4932 2.13502 25.5355 2.47801 25.47C2.82099 25.4044 3.13418 25.2344 3.37301 24.984C4.89536 23.393 10.3122 18.3619 18.2145 17.9189V23.3251C18.2146 23.54 18.2797 23.7502 18.4014 23.9289C18.5232 24.1075 18.6962 24.2468 18.8985 24.329C19.1009 24.4111 19.3235 24.4325 19.5383 24.3905C19.753 24.3484 19.9503 24.2448 20.105 24.0927L31.1767 13.2234C31.3837 13.0196 31.5 12.7436 31.5 12.4557C31.5 12.1679 31.3837 11.8919 31.1767 11.6881ZM20.4289 20.7015V16.8035C20.4289 16.5152 20.3122 16.2387 20.1046 16.0349C19.897 15.831 19.6153 15.7165 19.3217 15.7165C15.4356 15.7165 11.6504 16.7124 8.07153 18.6784C6.24879 19.6841 4.55049 20.8932 3.01041 22.2816C3.8131 19.0425 5.83645 15.9625 8.82994 13.4693C12.0435 10.7941 15.9656 9.19495 19.3217 9.19495C19.6153 9.19495 19.897 9.08043 20.1046 8.87659C20.3122 8.67275 20.4289 8.39629 20.4289 8.10802V4.21137L28.8281 12.4557L20.4289 20.7015Z"
                  fill="#6D6F7A"
                />
              </svg>
            </div>
            <div className="icon-wrapper mark">
              <svg
                className="icon icon-mark"
                viewBox="0 0 21 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="mark"
                  d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                />
              </svg>
            </div>
          </div>
          <div className="CommentBlock">
            <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
            <div className="comment__description">
              <a href="#" className="comment__owner">
                Карина Савина
              </a>
              <p className="comment__text">Это текст комментария...</p>
              <a href="#" className="reply">
                Ответить
              </a>
            </div>
            <span className="date">25 марта</span>
            <svg
              className="icon icon-like"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="icon"
                d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
              />
            </svg>
          </div>
          <svg
            className="icon icon-more"
            viewBox="0 0 25 5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="more">
              <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
              <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
              <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
            </g>
          </svg>
        </div> */}
{/* <div className="Post Repost _liked _marked">
            <div className="UserElem Repost__owner">
              <img src="./img/users/mark-krahmalev.jpeg" alt="User" />
              <div className="user__description">
                <a href="#" className="main__text">
                  Марк Крахмалев
                </a>
                <p className="secondary__text">20 марта 23:31</p>
              </div>
            </div>
            <div className="Repost__wrapper">
              <div className="UserElem">
                <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
                <div className="user__description">
                  <a href="#" className="main__text">
                    Александр Майков
                  </a>
                  <p className="secondary__text">Сегодня 9:37</p>
                </div>
              </div>
              <div className="media-container">
                <img
                  className="media__item"
                  src="./img/post/garnet-man.png"
                  alt="Post Item"
                />
                <img
                  className="media__item"
                  src="./img/post/garnet.png"
                  alt="Post Item"
                />
              </div>
            </div>
            <div className="PostControls">
              <div className="icon-wrapper like">
                <span className="count likes-count">-500</span>
                <svg
                  className="icon icon-like"
                  viewBox="0 0 23 23"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                  />
                </svg>
              </div>
              <div className="icon-wrapper comment">
                <span className="count comments-count">500</span>
                <svg
                  className="icon icon-comment"
                  viewBox="0 0 26 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="comment"
                    d="M9.25 25.5C8.91848 25.5 8.60054 25.3683 8.36612 25.1339C8.1317 24.8995 8 24.5815 8 24.25V20.5H3C2.33696 20.5 1.70107 20.2366 1.23223 19.7678C0.763392 19.2989 0.5 18.663 0.5 18V3C0.5 2.33696 0.763392 1.70107 1.23223 1.23223C1.70107 0.763392 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.763392 24.7678 1.23223C25.2366 1.70107 25.5 2.33696 25.5 3V18C25.5 18.663 25.2366 19.2989 24.7678 19.7678C24.2989 20.2366 23.663 20.5 23 20.5H15.375L10.75 25.1375C10.5 25.375 10.1875 25.5 9.875 25.5H9.25ZM10.5 18V21.85L14.35 18H23V3H3V18H10.5Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper repost">
                <svg
                  className="icon icon-repost"
                  viewBox="0 0 32 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="icon"
                    d="M31.1767 11.6881L20.105 0.818783C19.9503 0.666682 19.753 0.563052 19.5383 0.520999C19.3235 0.478945 19.1009 0.500357 18.8985 0.582526C18.6962 0.664696 18.5232 0.803931 18.4014 0.982625C18.2797 1.16132 18.2146 1.37144 18.2145 1.58643V7.06864C14.6246 7.37026 10.6595 9.09577 7.39755 11.8117C3.46988 15.0834 1.02443 19.2993 0.510988 23.6824C0.470864 24.0231 0.541243 24.3676 0.712109 24.6669C0.882976 24.9661 1.14562 25.2048 1.46267 25.349C1.77972 25.4932 2.13502 25.5355 2.47801 25.47C2.82099 25.4044 3.13418 25.2344 3.37301 24.984C4.89536 23.393 10.3122 18.3619 18.2145 17.9189V23.3251C18.2146 23.54 18.2797 23.7502 18.4014 23.9289C18.5232 24.1075 18.6962 24.2468 18.8985 24.329C19.1009 24.4111 19.3235 24.4325 19.5383 24.3905C19.753 24.3484 19.9503 24.2448 20.105 24.0927L31.1767 13.2234C31.3837 13.0196 31.5 12.7436 31.5 12.4557C31.5 12.1679 31.3837 11.8919 31.1767 11.6881ZM20.4289 20.7015V16.8035C20.4289 16.5152 20.3122 16.2387 20.1046 16.0349C19.897 15.831 19.6153 15.7165 19.3217 15.7165C15.4356 15.7165 11.6504 16.7124 8.07153 18.6784C6.24879 19.6841 4.55049 20.8932 3.01041 22.2816C3.8131 19.0425 5.83645 15.9625 8.82994 13.4693C12.0435 10.7941 15.9656 9.19495 19.3217 9.19495C19.6153 9.19495 19.897 9.08043 20.1046 8.87659C20.3122 8.67275 20.4289 8.39629 20.4289 8.10802V4.21137L28.8281 12.4557L20.4289 20.7015Z"
                    fill="#6D6F7A"
                  />
                </svg>
              </div>
              <div className="icon-wrapper mark">
                <svg
                  className="icon icon-mark"
                  viewBox="0 0 21 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="mark"
                    d="M2.5 24.8819C2.02381 25.0725 1.57143 25.031 1.14286 24.7574C0.714285 24.4838 0.5 24.0844 0.5 23.5591V2.85999C0.5 2.07349 0.78 1.39996 1.34 0.839407C1.9 0.278851 2.57238 -0.0009509 3.35714 2.42783e-06H17.6429C18.4286 2.42783e-06 19.1014 0.280281 19.6614 0.840837C20.2214 1.40139 20.5009 2.07444 20.5 2.85999V23.5591C20.5 24.0834 20.2857 24.4829 19.8571 24.7574C19.4286 25.032 18.9762 25.0735 18.5 24.8819L10.5 21.4499L2.5 24.8819Z"
                  />
                </svg>
              </div>
            </div>
            <div className="CommentBlock">
              <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
              <div className="comment__description">
                <a href="#" className="comment__owner">
                  Карина Савина
                </a>
                <p className="comment__text">Это текст комментария...</p>
                <a href="#" className="reply">
                  Ответить
                </a>
              </div>
              <span className="date">25 марта</span>
              <svg
                className="icon icon-like"
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon"
                  d="M11.5 23L9.8325 21.3455C3.91 15.4921 0 11.6191 0 6.89373C0 3.02071 2.783 0 6.325 0C8.326 0 10.2465 1.01526 11.5 2.60708C12.7535 1.01526 14.674 0 16.675 0C20.217 0 23 3.02071 23 6.89373C23 11.6191 19.09 15.4921 13.1675 21.3455L11.5 23Z"
                />
              </svg>
            </div>
            <svg
              className="icon icon-more"
              viewBox="0 0 25 5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="more">
                <circle id="ellipse" cx="22.5" cy="2.5" r="2.5" />
                <circle id="ellipse_2" cx="12.5" cy="2.5" r="2.5" />
                <circle id="ellipse_3" cx="2.5" cy="2.5" r="2.5" />
              </g>
            </svg>
          </div> */}
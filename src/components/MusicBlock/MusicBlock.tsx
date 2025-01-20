import { AppHeader } from "../UI/AppHeader/AppHeader"
import { dataMusic } from "../UI/MusicElem/dataMusic"
import { MusicElem } from "../UI/MusicElem/MusicElem"
import { SMusicBlock } from "./MusicBlock.style"


export const MusicBlock = () =>{
  return(
    <SMusicBlock>
          <div className="MusicBlock__title">
            <AppHeader AppHeaderText="Вы недавно слушали" textType="h2"/>
            
            <span className="count">123</span>
          </div>
          {dataMusic.map((elem)=>(
            <MusicElem 
            musicImg={elem.musicImg} 
            musicMineText={elem.musicMineText} 
            musicSecondaryText={elem.musicSecondaryText}
            />
          ))}
          {/* <div className="MusicElem">
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
          </div> */}
        </SMusicBlock>
  )
}
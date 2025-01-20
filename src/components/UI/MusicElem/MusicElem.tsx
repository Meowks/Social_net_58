import { SMusicElem } from "./MusicElem.styled"


interface IMusicElem {
  musicImg:string,
  musicMineText:string,
  musicSecondaryText:string,
}

export const MusicElem = ({
  musicImg,
  musicMineText,
  musicSecondaryText,
}:IMusicElem) => {
  return (
    <SMusicElem>
      <img src={musicImg} alt="Album" />
      <div className="music__description">
        <p className="main__text">{musicMineText}</p>
        <p className="secondary__text">{musicSecondaryText}</p>
      </div>
      <div className="plus-button"></div>
    </SMusicElem>
  )
}
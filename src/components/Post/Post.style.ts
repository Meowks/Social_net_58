import styled, { css } from "styled-components";

interface SPostProps {
  $isLiked?: boolean;
  $isMarked?: boolean;
}

export const SPost = styled.div<SPostProps>`

  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.color.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;
  
  ${(props) => props.$isLiked &&
    css`
    .icon-wrapper {
      
      .icon-like {
        fill: ${(props) => props.theme.color.red};
        stroke: 0;
        stroke-width: 0;
      }

      .likes-count {
        color: ${(props) => props.theme.color.red};
      }
    }
  `}

  ${(props) => props.$isMarked &&
    css`
    .icon-wrapper {
      .icon-mark {
        fill: ${(props) => props.theme.color.primeColor};
        stroke: 0;
        stroke-width: 0;
      }
    }
  `}

  .Post__text {
    margin-bottom: 20px;
  }


  .icon-more {
  cursor: pointer;
  position: absolute;
  top: calc(1vw + 11px);
  right: calc(1vw + 11px);
  width: 25px;
  padding: 15px;
  box-sizing: content-box;
  border-radius: 15px;

  fill: ${(props) => props.theme.color.darkGray};
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }

  &:active {
    transition: 100ms;
    background-color: ${(props) => props.theme.color.primeColor};
    fill: white;
  }
}
`

export const SPostSetting = styled.div`
  position: absolute;
  top: -46px;
  right: 0;
  display: flex;
  gap: 0 20px;
  padding: 8px 12px;
  border-radius:8px;
  background-color: #fff;
  border: 2px solid ${(props)=>props.theme.color.gray};
  span{
    font-size: 16px;
    color: ${(props)=>props.theme.color.blue};
    cursor:pointer;
    padding: 6px 8px;
    border-radius:8px;
    transition:all .3s;
    &:hover{
      color: white;
      background-color:orange;
      text-shadow:#fff;
    }
  }
`
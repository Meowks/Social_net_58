import styled from "styled-components";


export const SMusicElem = styled.div`

  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 15px;
  border-radius: 15px;

  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }

  img {
    flex: 0 0 70px;
    height: 70px;
    width: 70px;
    border-radius: 5px;
    object-fit: cover;
  }

  .music__description {
    flex: 1 1 auto;

    .main__text {
      margin-bottom: 5px;
      display: inline-block;
    }
  }

  .secondary__text {
    font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    font-weight: 300;
  }

  .plus-button {
    flex: 0 0 24px;
    height: 24px;

    border: 2px solid ${(props) => props.theme.color.primeColor};
    border-radius: 50%;

    position: relative;

    &::before {
      content: "";
      border-radius: 5px;
      height: 2px;
      width: 70%;
      background-color: ${(props) => props.theme.color.primeColor};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 200ms;
    }

    &::after {
      content: "";
      border-radius: 5px;
      width: 2px;
      height: 70%;
      background-color: ${(props) => props.theme.color.primeColor};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 200ms;
    }

    &._active {
      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  
`
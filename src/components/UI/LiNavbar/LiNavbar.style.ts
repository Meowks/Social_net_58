import styled from "styled-components";


export const SLiNavbar = styled.li`
  
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;

  border-radius: 10px;
  padding: 10px 15px;
  list-style: none;
  transition: 200ms;

  .icon {
    flex: 0 1 25px;
    height: calc(1vw + 5px); //? 1440 - 20 | 1920 - 25
    object-fit: contain;
    fill: ${(props) => props.theme.color.primeColor};
  }

  .item__name {
    flex: 1 1 auto;
  }

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }

  &:active {
    transition: 100ms;
    background-color: ${(props) => props.theme.color.primeColor};
    color: white;

    .icon {
      fill: white;
    }

  }
  

  @media (max-width: 1100px) {
  display: inline-block;

  .icon {
    height: 25px;
  }

  .item__name {
    display: none;
  }
}
`
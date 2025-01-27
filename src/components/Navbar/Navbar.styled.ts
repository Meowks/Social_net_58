import styled from "styled-components";


export const SNavbar = styled.nav`


  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  border-radius: 20px;
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.color.elemsBgc};
  color: ${(props) => props.theme.color.textColor};

  margin-bottom: 20px;

  .navbar__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  @media (max-width: 1100px) {
  
      .icon {
        height: 25px;
      }

      .item__name {
        display: none;
      }

      .Badge {
        display: none;
      }
    }

`
import styled from "styled-components";


export const SNavbar = styled.nav`


  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  border-radius: 20px;
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.color.elemsBgc};
  color: ${(props) => props.theme.color.textColor};

  .navbar__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

`
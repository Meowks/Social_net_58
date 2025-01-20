import styled from "styled-components";


export const SMusicBlock = styled.div`

  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  background-color: ${(props) => props.theme.color.elemsBgc};
  padding: calc(1vw + 11px);
  border-radius: 20px;

  &__title {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.color.primeColor};
      font-weight: 400;
    }
  }

  

`
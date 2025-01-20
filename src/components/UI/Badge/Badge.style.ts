import styled from "styled-components";


export const SBadge = styled.span`

  background-color: white;
  color: ${(props) => props.theme.color.textColor};
  
  &:active {
    transition: 100ms;
    background-color: ${(props) => props.theme.color.primeColor};
    color: white;

  }

@media (max-width: 1100px) {
  display: none;
}


`

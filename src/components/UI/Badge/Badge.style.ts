import styled from "styled-components";


export const SBadge = styled.span`

  background-color: white;
  color: ${(props) => props.theme.color.textColor};

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
  
  &:active{

    padding: 3px 10px;
    border-radius: 20px;  
  }

@media (max-width: 1100px) {
  display: none;
}


`

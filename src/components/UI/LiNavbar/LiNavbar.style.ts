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
       height: calc(1vw + 5px); 
       object-fit: contain;
       fill: ${(props) => props.theme.color.primeColor};
     }

     .item__name {
       flex: 1 1 auto;
     }

     .Badge {
      background-color: ${(props) => props.theme.color.primeColor} /* каласс Badge что бы не потерять */
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

       .Badge {
         background-color: white;
         color: ${(props) => props.theme.color.textColor};
       }
     }
   

@media (max-width: 1100px) {    
  display: inline-block;     
}
  

`
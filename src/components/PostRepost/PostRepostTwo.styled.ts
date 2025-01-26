import styled from "styled-components";

export const SPostRepostTwo = styled.div`
  .Post {
  box-shadow: 0 0 10px ${(props) => props.theme.color.lightGray};
  padding: calc(1vw + 11px);
  background-color: ${(props) => props.theme.color.elemsBgc};
  border-radius: 20px;
  margin-bottom: 20px;

  position: relative;

  &._liked {
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
  }

  &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: ${(props) => props.theme.color.primeColor};
        stroke: 0;
        stroke-width: 0;
      }
    }
  }
}

 &._liked {
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
  }

  &._marked {
    .icon-wrapper {
      .icon-mark {
        fill: ${(props) => props.theme.color.primeColor};
        stroke: 0;
        stroke-width: 0;
      }
    }
  }
`
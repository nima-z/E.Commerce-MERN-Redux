import { css } from "styled-components";

export function mobile(props) {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
}
export function tablet(props) {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
}
export function smallScreen(props) {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
}

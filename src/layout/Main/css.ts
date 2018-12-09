import { css } from "emotion";

export const layoutContainer = css`
  height: 100vh;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 55px repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "header header header"
    "userList chat map"
    "userList chat map";
`;

import { css } from "emotion";

export const userListContainer = css`
  grid-area: userList;
  h1 {
    text-align: center;
    border-bottom: solid 1px #0002;
  }
`;

export const userList = css`
  overflow-y: auto;
  height: calc(100vh - 150px);
`;

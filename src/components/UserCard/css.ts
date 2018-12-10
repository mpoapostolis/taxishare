import { css } from "emotion";

export const userClassContainer = css`
  height: 75px;
  padding: 0 10px 0 10px;
  width: calc(100% - 25px);
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 10px;
  &:hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.12), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`;

export const avatar = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

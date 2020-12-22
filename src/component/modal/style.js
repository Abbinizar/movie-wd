import { css, keyframes } from '@emotion/css';

const showFrame = keyframes`
  from {
    transform:scale(0.5);
  }
  to {
    transform:scale(1);
  }
`;

const hideFrame = keyframes`
  from {
    transform:scale(1);
  }
  to {
    transform:scale(0.5);
  }
`;

export const show = css`
  animation: ${showFrame} 0.5s ease;
`;

export const hide = css`
  animation: ${hideFrame} 0.5s ease;
`;

export const container = css`
  position: fixed;
  background-color: #707070;
  background: rgba(60, 60, 60, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const box = isShow => css`
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  min-height: 200px;
  min-width: 300px;
  display: flex;
  ${isShow ? show : hide};
`;

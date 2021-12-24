import styled, { css } from "styled-components";

export const DataWrap = styled.section`
  background-color: #272234;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  z-index: 10;
`;

export const DataInnerWrap = styled.div``;
export const DataDisplay = styled.div`

`;

export const DataTitle = styled.h3`
  font-size: 0.6rem;
  line-height: 0.6rem;
  font-weight: var(--font-weight-400);
  color: var(--color-font-200);
`;

export const DataInfo = styled.h4`
  font-size: 1.4rem;
  line-height: 1.4rem;
  padding-top: 0.5rem;

  span {
    color: var(--color-font-200);
  }
`;

export const DataHidden = styled.div`
  /* background-color: red;
  min-width: 200px;
  min-height: 100px; */
  padding-top: 0.75rem;
  display: none;

  ${({ boxToggle }) =>
    boxToggle &&
    css`
      display: flex;
    `}
`;

export const DataOpen = styled.button`
  width: 0.8rem;
  height: 0.8rem;
  background-color: var(--color-bg-200);
  color: var(--color-font-300);
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 100%;
  display: grid;
  place-items: center;
  font-size: 0.5rem;
  cursor: pointer;
  transition: var(--transition);

  ${({ boxToggle }) =>
    boxToggle &&
    css`
      transition: var(--transition);
      transform: rotateZ(405deg);
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;
    `}
`;

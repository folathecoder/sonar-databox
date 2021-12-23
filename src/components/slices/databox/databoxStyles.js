import styled, { css } from "styled-components";
import { QUERIES } from "../../../helpers/mediaQueries";

export const DataWrap = styled.section`
  background-color: #272234;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  border-radius: 0.5rem;
  position: relative;
`;
export const DataInnerWrap = styled.div``;
export const DataDisplay = styled.div``;
export const DataHeader = styled.div`
  padding-bottom: 0.6rem;

  h3 {
    border-bottom: var(--border-dotted);
    display: inline-block;
  }
`;
export const DataInfo = styled.div`
  display: flex;

  & > * {
    /* flex: 1; */
    padding: 0rem 0.75rem 0rem 0.75rem;
    border-left: var(--border-dotted);
  }

  div:first-child {
    padding: 0rem 0.75rem 0rem 0rem;
    border-left: none;
  }

  div:last-child {
    padding: 0rem 0rem 0rem 0.75rem;
  }
`;
export const DataInfoItem = styled.div``;

export const DataHidden = styled.div`
  background-color: red;
  min-width: 200px;
  min-height: 100px;
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

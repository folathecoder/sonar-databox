import styled from "styled-components";

export const DataboxContainer = styled.section`
  margin: 1rem 1.5rem;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;

  & > * {
    margin-right: 0.5rem;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

import styled from "styled-components";

export const SupplyContainer = styled.ul`
  /* background-color: red; */
  width: 300px;
  border-top: 0.1rem solid var(--color-font-300);
`;
export const SupplyItemWrap = styled.li`
  display: flex;
  align-items: center;
  padding: 0.3rem 0rem;

  & > * {
    flex: 1;
  }
`;
export const SupplyItemImage = styled.div`
  i {
    font-size: 2rem;
  }
`;
export const SupplyItemContent = styled.div`
  /* background-color: black; */
  flex: 5;
  display: flex;
  flex-direction: column;

  & > * {
    align-items: center;
    flex: 1;
  }
`;
export const SupplyItemHeading = styled.div`
  /* padding-bottom: 1rem; */

  h3 {
    font-size: 0.6rem;
    line-height: 0.7rem;
    font-weight: var(--font-weight-400);
    color: var(--color-font-200);
    border-bottom: var(--border-dotted);
    display: inline-block;
  }
`;
export const SupplyItemInfo = styled.div`
  display: flex;
  font-size: 1.1rem;
  line-height: 1.1rem;
  padding-top: 0.5rem;
  font-weight: var(--font-weight-600);

  span {
    color: var(--color-font-200);
  }

  div:first-child {
    padding-right: 0.8rem;
  }

  div:last-child {
    padding-left: 0.8rem;
  }
`;

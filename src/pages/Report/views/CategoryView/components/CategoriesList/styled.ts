import { styled } from 'styled-components';

export const CategoryOuterContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr;
  place-items: center left;
  width: 100%;
  border-radius: 12px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.paleGrayBg};

  > svg {
    max-width: 32px;
    max-height: 32px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.pale};
    cursor: pointer;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h2,
  > h3 {
    padding: 0;
    margin: 0;
  }
`;

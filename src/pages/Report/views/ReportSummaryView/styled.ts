import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const GreyBox = styled.div`
  background-color: ${({ theme }) => theme.colors.paleGrayBg};
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const TextGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  width: 100%;
`;

export const TextGridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DownloadLink = styled.div`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  justify-content: flex-end;
`;

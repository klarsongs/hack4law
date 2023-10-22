import { styled } from 'styled-components';
import color from 'color';

export const AlertWrapper = styled.div`
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  background: ${({ theme }) => theme.colors.warning};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  border-radius: 12px;
  margin-top: 24px;
`;

export const AlertContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QrCodeWrapper = styled.div`
  margin-top: 24px;
  background: ${({ theme }) => theme.colors.paleGrayBg};
  border-radius: 12px;
  padding: 24px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-auto-flow: row;
`;

export const ChipButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const ChipButton = styled.button`
  padding: 4px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.pale};

  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${({ theme }) =>
      color(theme.colors.paleHover).darken(0.1).hex()};
  }
`;

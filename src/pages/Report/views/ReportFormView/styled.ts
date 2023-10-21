import { Button } from 'components/Button';
import styled, { css } from 'styled-components';
import color from 'color';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
`;

export const DataWillBeEditable = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayMedium};
`;

export const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonLikeRadioButton = styled(Button)<{ $isSelected: boolean }>`
  padding: 8px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.dark} !important;
    background: ${({ theme }) =>
      color(theme.colors.pale).lighten(0.15).toString()};
    border: ${({ theme }) => `solid 1px ${theme.colors.primary}`} !important;
  }

  ${({ $isSelected, theme }) =>
    $isSelected &&
    css`
      background-color: ${theme.colors.pale};
      border: solid 1px ${theme.colors.primary};
    `}
`;

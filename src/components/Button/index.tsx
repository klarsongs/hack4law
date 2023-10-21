import { styled } from 'styled-components';
import color from 'color';
import { Button as AntButton } from 'antd';

export const Button = styled(AntButton)`
  font-size: 16px;
  padding: 16px 24px;
  font-weight: 500;
  height: min-content;
  display: flex;
  align-items: center;
  justify-content: center;

  &.ant-btn-primary {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;

    &:hover {
      && {
        background: ${({ theme }) =>
          color(theme.colors.primary).darken(0.1).toString()};
      }
    }
  }

  &.ant-btn-text {
    padding: 6px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;

    &:hover {
      && {
        color: ${({ theme }) => theme.colors.primary};
        background: ${({ theme }) =>
          color(theme.colors.pale).lighten(0.08).toString()};
      }
    }
  }
`;

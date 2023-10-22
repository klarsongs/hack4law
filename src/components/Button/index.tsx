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

  &.ant-btn-default {
    border-radius: 12px;

    &:hover {
      && {
        background: ${({ theme }) => theme.colors.paleHover};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }

  &.ant-btn-primary {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
    display: flex;
    gap: 12px;

    &:hover {
      && {
        background: ${({ theme }) =>
          color(theme.colors.primary).darken(0.1).toString()};
      }
    }

    svg {
      color: white;
      path {
        stroke: white;
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
        background: ${({ theme }) => theme.colors.paleHover};
      }
    }
  }
`;

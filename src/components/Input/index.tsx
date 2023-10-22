import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)<{
  $fullWidth?: boolean;
  isBig?: boolean;
}>`
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  background: #fff;
  padding: ${({ isBig }) => (isBig ? '16px 22px' : '8px 16px')};
  font-size: 16px;
  margin-top: ${({ isBig }) => !isBig && '4px'};

  ${({ $fullWidth }) =>
    $fullWidth &&
    `
    width: 100%;
  `}

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

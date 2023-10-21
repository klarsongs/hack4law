import styled from 'styled-components';
import { Input as AntInput } from 'antd';

export const Input = styled(AntInput)`
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  background: #fff;
  padding: 16px 22px;
  font-size: 18px;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

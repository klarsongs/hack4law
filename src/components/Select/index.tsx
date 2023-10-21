import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const Select = styled(AntSelect)`
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  background: #fff;
  padding: 8px 16px;
  font-size: 16px;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &.ant-select-focused {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

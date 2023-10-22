import styled from 'styled-components';
import { Select as AntSelect } from 'antd';

export const Select = styled(AntSelect)`
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  background: #fff;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .ant-select-selector {
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    font-size: 16px !important;
  }

  &.ant-select-focused {
    .ant-select-selector {
      border-color: ${({ theme }) => theme.colors.primary} !important;
      box-shadow: none !important;
    }
  }
`;

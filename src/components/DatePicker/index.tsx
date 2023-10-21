import { DatePicker as AntDatePicker } from 'antd';
import styled from 'styled-components';

export const DatePicker = styled(AntDatePicker)`
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.colors.grayLight};
  background: #fff;
  padding: 8px 16px;
  font-size: 16px;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }

  &.ant-picker-focused {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

import { Alert as AntAlert } from 'antd';
import { styled } from 'styled-components';

export const Alert = styled(AntAlert)`
  border: none;
  border-radius: 12px;

  > .ant-alert-content {
    color: ${({ theme }) => theme.colors.dark};
  }

  &.ant-alert-info {
    background-color: ${({ theme }) => theme.colors.pale};

    > span[role='img'] {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`;

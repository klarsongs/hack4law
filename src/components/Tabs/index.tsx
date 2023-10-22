import { Tabs as AntTabs } from 'antd';
import styled from 'styled-components';

export const Tabs = styled(AntTabs).attrs({
  tabBarGutter: 32,
})`
  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.colors.primary};
  }

  &.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.colors.black};
    text-shadow: none;
  }

  &.ant-tabs .ant-tabs-tab:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  .ant-tabs-tab-active {
    font-weight: 500;
  }
`;

import { LayoutContainer, LayoutWrapper } from './styled';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <LayoutContainer data-testid='layout-container'>
    <LayoutWrapper data-testid='layour-wrapper'>{children}</LayoutWrapper>
  </LayoutContainer>
);

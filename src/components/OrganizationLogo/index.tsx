import { Container } from './styled';

import Logo from 'assets/logo.svg';

type OrganizationLogoProps = {
  size?: 'small' | 'big';
};

export const OrganizationLogo = ({ size = 'big' }: OrganizationLogoProps) => {
  return (
    <Container>
      <img
        src={Logo as unknown as string}
        alt='Logo'
        width={size === 'small' ? '25px' : '42px'}
      />
      <span
        style={{
          marginLeft: size === 'small' ? 5 : 8,
          fontSize: size === 'small' ? 15 : 24,
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Wszystko </span>
        <span>dobrze</span>
      </span>
    </Container>
  );
};

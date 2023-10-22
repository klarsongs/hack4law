import { Container } from './styled';

import clientLogo from 'assets/clientOrganizationLogo.svg';

type OrganizationLogoProps = {
  size?: 'small' | 'big';
  style?: React.CSSProperties;
  text?: string;
};

export const ClientOrganizationLogo = ({
  size = 'big',
  style,
}: OrganizationLogoProps) => {
  return (
    <Container style={style}>
      <img
        src={clientLogo as unknown as string}
        alt='Logo'
        width={size === 'small' ? '25px' : '42px'}
      />
      <span
        style={{
          marginLeft: size === 'small' ? 5 : 8,
          fontSize: size === 'small' ? 15 : 24,
        }}
      >
        <span style={{ fontWeight: 'bold' }}>Logo </span>
        <span>Organizacji</span>
      </span>
    </Container>
  );
};

import { Container } from './styled';

type OrganizationLogoProps = {
  size?: 'small' | 'big';
};

export const OrganizationLogo = ({ size = 'big' }: OrganizationLogoProps) => {
  return (
    <Container>
      <span>
        <svg
          width='42'
          height='42'
          viewBox='0 0 42 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42ZM24 27C28.9706 27 33 22.9706 33 18C33 13.0294 28.9706 9 24 9C19.0294 9 15 13.0294 15 18C15 22.9706 19.0294 27 24 27Z'
            fill='#0C2E32'
          />
        </svg>
      </span>
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

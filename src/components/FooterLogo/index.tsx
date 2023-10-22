import { OrganizationLogo } from 'components/OrganizationLogo';
import { styled } from 'styled-components';

export const FooterLogo = () => {
  return (
    <FooterLogoContainer>
      <Text>Obsługiwane przez</Text>
      <OrganizationLogo
        size='small'
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </FooterLogoContainer>
  );
};

const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 36px auto 0 auto;

  opacity: 0.4;
`;

const Text = styled.div`
  font-size: 10px;
`;

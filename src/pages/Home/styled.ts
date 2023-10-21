import styled from 'styled-components';

import { Typography } from 'antd';
import { Button } from 'components/Button';

import Illustration from 'assets/illustration.svg';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  max-height: 100vh;
  overflow: hidden;
`;

export const StyledIllustration = styled.img.attrs({
  src: Illustration as unknown as string,
  alt: 'Line decoration',
})`
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 48px);
  object-fit: cover;
  border-radius: 24px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-firection: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const InfoBox = styled.div`
  svg {
    margin-right: 8px;
  }

  margin-left: 16px;
  background-color: #cee3e3;
  color: #0c2e32;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const InformationBottom = styled.div`
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  color: #067070;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`;

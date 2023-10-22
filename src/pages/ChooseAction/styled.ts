import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-top: 24px;
`;

export const Box = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.paleGrayBg};
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: pointer;
  border-radius: 16px;
  text-align: center;
  width: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.paleHover};
  }

  svg {
    margin-bottom: 16px;
  }
`;

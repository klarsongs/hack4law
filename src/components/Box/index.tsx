import React from 'react';
import styled from 'styled-components';
import { Typography } from 'components/Typography';

interface Props {
  icon: React.ReactNode;
  title: string;
  description?: string;
  label: string;
  button: React.ReactNode;
  style?: React.CSSProperties;
}

export const Box = ({
  icon,
  title,
  label,
  description,
  button,
  style,
}: Props) => {
  return (
    <BoxContainer style={style}>
      {icon}
      <div>
        <BoxLabel style={{ fontWeight: 500 }}>{label}</BoxLabel>
        <Typography.Title level={3} style={{ margin: 0, fontWeight: 500 }}>
          {title}
        </Typography.Title>
        {description && (
          <div style={{ marginTop: 4 }}>
            <Typography.Text style={{ fontWeight: 300 }}>
              {description}
            </Typography.Text>
          </div>
        )}
      </div>
      {button}
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 1fr;
  place-items: center left;
  width: 100%;
  border-radius: 12px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.paleGrayBg};

  > svg {
    max-width: 32px;
    max-height: 32px;
  }
`;

const BoxLabel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

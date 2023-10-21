import { ReactComponent as InfoIcon } from 'assets/infoIcon.svg';
import { Box } from './styled';
import { Typography } from 'components/Typography';
import { theme } from 'theme';

export const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <Box>
    <InfoIcon />
    <Typography.Text color={theme.colors.dark}>{children}</Typography.Text>
  </Box>
);

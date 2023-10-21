import { Button, Row } from 'antd';
import { Link } from 'react-router-dom';
import { StyledCol } from './styled';

export const HomePage = () => {
  return (
    <Row justify='center'>
      <StyledCol span={12}>Obrazek tada</StyledCol>
      <StyledCol span={12}>
        <Link to='/organizacja'>
          <Button type='primary'>Wejdź</Button>
        </Link>
      </StyledCol>
    </Row>
  );
};

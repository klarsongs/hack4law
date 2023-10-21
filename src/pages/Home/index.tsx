import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Form, Space } from 'antd';
import { useAuthorizationService } from 'api/auth/service';
import { OrganizationLogo } from 'components/OrganizationLogo';
import {
  Column,
  Container,
  InfoBox,
  InformationBottom,
  Label,
  StyledButton,
  StyledIllustration,
} from './styled';
import { Input } from 'components/Input';

interface IFormInput {
  slug: string;
  key: string;
}

export const HomePage = () => {
  const { useVerify } = useAuthorizationService();
  const { mutate: verify } = useVerify();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      slug: '',
      key: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    verify(data);
  };

  return (
    <Container>
      <StyledIllustration />
      <Column>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Space direction='vertical' style={{ padding: 24 }}>
            <OrganizationLogo />
            <Label>
              Podaj identyfikator swojej organizacji{' '}
              <InfoBox>
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.00001 15.398C11.8097 15.398 14.898 12.3097 14.898 8.5C14.898 4.69036 11.8097 1.60204 8.00001 1.60204C4.19037 1.60204 1.10205 4.69036 1.10205 8.5C1.10205 12.3097 4.19037 15.398 8.00001 15.398Z'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M6.4082 11.6837H9.59188'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.00001 11.6837V7.96939H6.93878'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M7.99999 5.58163C7.85346 5.58163 7.73468 5.46285 7.73468 5.31632C7.73468 5.1698 7.85346 5.05102 7.99999 5.05102'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8 5.58163C8.14652 5.58163 8.26531 5.46285 8.26531 5.31632C8.26531 5.1698 8.14652 5.05102 8 5.05102'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Gdzie go znajdę?</span>
              </InfoBox>
            </Label>
            <Controller
              name='slug'
              control={control}
              render={({ field }) => (
                <Input
                  placeholder='Identyfikator'
                  {...field}
                  style={{ marginBottom: 24, width: 508 }}
                />
              )}
            />
            <Label>
              Podaj aktualny token organizacji{' '}
              <InfoBox>
                <svg
                  width='16'
                  height='17'
                  viewBox='0 0 16 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.00001 15.398C11.8097 15.398 14.898 12.3097 14.898 8.5C14.898 4.69036 11.8097 1.60204 8.00001 1.60204C4.19037 1.60204 1.10205 4.69036 1.10205 8.5C1.10205 12.3097 4.19037 15.398 8.00001 15.398Z'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M6.4082 11.6837H9.59188'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8.00001 11.6837V7.96939H6.93878'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M7.99999 5.58163C7.85346 5.58163 7.73468 5.46285 7.73468 5.31632C7.73468 5.1698 7.85346 5.05102 7.99999 5.05102'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8 5.58163C8.14652 5.58163 8.26531 5.46285 8.26531 5.31632C8.26531 5.1698 8.14652 5.05102 8 5.05102'
                    stroke='#0C2E32'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>Gdzie go znajdę?</span>
              </InfoBox>
            </Label>
            <Controller
              name='key'
              control={control}
              render={({ field }) => <Input placeholder='Token' {...field} />}
            />
            <Form.Item style={{ marginTop: 24 }}>
              <StyledButton type='primary' htmlType='submit'>
                Kontynuuj
              </StyledButton>
            </Form.Item>
            <InformationBottom>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_45_134)'>
                  <path
                    d='M8.38205 14.8237C8.13619 14.9185 7.86383 14.9185 7.61797 14.8237C5.69789 14.0708 4.04921 12.7568 2.8869 11.0531C1.72461 9.34945 1.10262 7.33505 1.10205 5.27265V2.16326C1.10205 1.8818 1.21386 1.61188 1.41288 1.41286C1.61189 1.21384 1.88182 1.10204 2.16328 1.10204H13.8367C14.1182 1.10204 14.3882 1.21384 14.5871 1.41286C14.7861 1.61188 14.898 1.8818 14.898 2.16326V5.26204C14.8996 7.32625 14.2785 9.34296 13.1161 11.0488C11.9537 12.7546 10.3038 14.0701 8.38205 14.8237Z'
                    stroke='#067070'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.61228 6.40816H10.3878C10.7062 6.40816 10.9184 6.6204 10.9184 6.93877V10.1224C10.9184 10.4408 10.7062 10.6531 10.3878 10.6531H5.61228C5.29391 10.6531 5.08167 10.4408 5.08167 10.1224V6.93877C5.08167 6.6204 5.29391 6.40816 5.61228 6.40816Z'
                    stroke='#067070'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M5.87756 6.40816V5.34694C5.87756 4.17959 6.83267 3.22449 8.00001 3.22449C9.16736 3.22449 10.1225 4.17959 10.1225 5.34694V6.40816'
                    stroke='#067070'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_45_134'>
                    <rect width='16' height='16' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              Dowiedz się więcej jak zapewniamy bezpieczeństwo
            </InformationBottom>
          </Space>
        </form>
      </Column>
    </Container>
  );
};

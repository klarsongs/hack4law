import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Form, Input, Space } from 'antd';
import { useAuthorizationService } from 'api/auth/service';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction='vertical'>
        <Controller
          name='slug'
          control={control}
          render={({ field }) => (
            <Input placeholder='Januszex (slug)' {...field} />
          )}
        />
        <Controller
          name='key'
          control={control}
          render={({ field }) => (
            <Input placeholder='tem-key (key)' {...field} />
          )}
        />
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Space>
    </form>
  );
};

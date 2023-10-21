import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Button, Form, Input, Space } from 'antd';

interface IFormInput {
  companyId: string;
  companyKey: string;
}

export const OrganizationPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      companyId: '',
      companyKey: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction='vertical'>
        <Controller
          name='companyId'
          control={control}
          render={({ field }) => <Input placeholder='company id' {...field} />}
        />
        <Controller
          name='companyKey'
          control={control}
          render={({ field }) => <Input placeholder='company key' {...field} />}
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

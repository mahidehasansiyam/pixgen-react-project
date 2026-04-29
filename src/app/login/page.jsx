'use client';
import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';
import { useForm } from 'react-hook-form';
import { BsGoogle } from 'react-icons/bs';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,

      callbackURL: '/',
    });
    console.log('data', data, 'error', error, 'res', res);
  };

  const handlegooglesignin = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Form
        className="flex w-96 mx-auto flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField isRequired>
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
            {...register('email', { required: 'You must set an emain' })}
          />
          {errors.email && <span>This field is required</span>}
          <FieldError />
        </TextField>

        <TextField isRequired>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: 'You must set a paassword' })}
          />
          {errors.password && <span>This field is required</span>}
          <Description></Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="flex justify-center ">
          <Button className='w-full' onClick={handlegooglesignin} variant="outline">
            <BsGoogle></BsGoogle>login with google
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default LoginPage;

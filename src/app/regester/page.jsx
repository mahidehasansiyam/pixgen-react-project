'use client';
import { Check } from '@gravity-ui/icons';
import { useForm } from 'react-hook-form';
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
import { authClient } from '@/lib/auth-client';

const RegestrationPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);


    const { data:res, error } = await authClient.signUp.email({
      name: data.name,
      email: data.email, 
      password: data.password, 
      image: data.image,
      callbackURL: '/',
    });
    console.log("data",data,"error", error,"res",res);
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Regestration</h1>

      <Form
        className="flex w-96 mx-auto flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input
            placeholder="Enter your name"
            {...register('name', { required: 'You must set a name' })}
          />
          {errors.name && <span>This field is required</span>}
        </TextField>

        <TextField name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" {...register('image')} />
        </TextField>

        <TextField isRequired>
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
            {...register('email', { required: 'You must set an email' })}
          />
          {errors.email && <span>This field is required</span>}
          <FieldError />
        </TextField>

        <TextField isRequired>
          <Label>Password</Label>
          <Input
            type='password'
            placeholder="Enter your password"
            {...register('password', { required: 'You must set a password' })}
          />

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
      </Form>
    </Card>
  );
};

export default RegestrationPage;

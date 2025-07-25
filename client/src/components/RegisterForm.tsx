import { Button } from '@ui';
import { useForm } from 'react-hook-form';
import { Input, PasswordInput } from './Input';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { RegisterRequest } from '../types/auth.type';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { registerAsync } from '../services/auth.service';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>();
  const mutation = useMutation({ mutationFn: registerAsync });

  const handleRegister = async (data: RegisterRequest) => {
    try {
      const response = await mutation.mutateAsync(data);
      toast.success('Registration successful!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message ?? 'Registration failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="flex flex-col w-full max-w-md gap-4 p-6 border rounded-lg shadow-md bg-background border-border"
    >
      <div className="flex justify-start w-full mb-4">
        <span
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm cursor-pointer text-secondary-foreground hover:brightness-50"
        >
          <ArrowLeft size={16} className="inline" />
          Back to Home
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="../../assets/logo.svg" alt="logo" className="h-[3rem]" />
        <p className="text-sm">Create Your Account</p>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          label="Username:"
          type="text"
          placeholder="Your full name"
          {...register('username', { required: true })}
        />
        <Input
          label="Email:"
          type="email"
          placeholder="Your email address"
          {...register('email', { required: true })}
        />
        <PasswordInput
          label="Password:"
          placeholder="Enter a password"
          {...register('password', { required: true })}
        />
      </div>

      <Button size="lg">Sign Up</Button>

      <div className="flex flex-col items-center justify-center gap-2 text-sm text-secondary-foreground">
        <p>
          Already have an account?{' '}
          <span
            className="underline cursor-pointer hover:brightness-50"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </form>
  );
};

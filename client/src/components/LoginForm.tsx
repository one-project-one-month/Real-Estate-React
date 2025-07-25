import { Button } from '@ui';
import { useForm } from 'react-hook-form';
import { PasswordInput, Input } from './Input';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LoginRequest, LoginResponse } from '../types/auth.type';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { loginAsync } from '../services/auth.service';
import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();
  const mutation = useMutation({ mutationFn: loginAsync });

  const handleLogin = async (data: LoginRequest) => {
    try {
      const response: LoginResponse = await mutation.mutateAsync(data);
      localStorage.setItem('access_token', response.accessToken);
      localStorage.setItem('refresh_token', response.refreshToken);
      toast.success('Login successful!');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message ?? 'Login failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col w-full max-w-md gap-4 p-6 border rounded-lg shadow-md border-border bg-background"
    >
      <div className="flex justify-start w-full mb-4">
        <span
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm cursor-pointer text-secondary-foreground hover:brightness-50"
        >
          <ArrowLeft size={16} className="inline" />
          {t('auth.back_to_home')}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="../../assets/logo.svg" alt="logo" className="h-[3rem]" />
        <p className="text-sm"> {t('auth.welcome_back')}</p>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          label={t('footer.email')}
          type="email"
          placeholder={t('footer.email')}
          {...register('email', { required: true })}
        />
        <PasswordInput
          label={t('auth.password')}
          placeholder={t('auth.password_placeholder')}
          {...register('password', { required: true })}
        />
      </div>

      <Button size="lg">    {t('login')}</Button>

      <div className="flex flex-col items-center justify-center gap-2 text-sm text-secondary-foreground">
        <p>
         {t('auth.dont_have_account')}
          <span
            className="underline cursor-pointer hover:brightness-50"
            onClick={() => navigate('/registration')}
          >
                 {t('login')}

          </span>
        </p>
        <p className="underline cursor-pointer hover:brightness-50">
       {t('auth.forgot_password')}
        </p>
      </div>
    </form>
  );
};

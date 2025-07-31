import { useForm } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";
import { LoginRequest, LoginResponse } from "src/types/auth.type";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { loginAsync } from '../services/auth.service';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { Input, PasswordInput } from './Input';
import { Button } from '@ui';

export const AdminLoginForm = () => {
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
      navigate('/admin/dashboard'); // Redirect to admin dashboard after Login
    } catch (error: any) {
      toast.error(error.message ?? 'Login failed');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col w-full max-w-md gap-4 p-6 border rounded-lg shadow-md border-border bg-background">
      <div className="flex flex-col items-center justify-center">
        <img src="../../assets/logo.svg" alt="logo" className="h-[3rem]" />
        <p className="text-sm">{t('auth.welcome_back')}</p>
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
          placeholder={t('auth.password')}
          {...register('password', { required: true })}
        />
        {/* {errors.email && <span className="text-red-500">{t('auth.email_required')}</span>} */}
        {/* {errors.password && <span className="text-red-500">{t('auth.password_required')}</span>} */}
      </div>
      <Button size="lg">
        {t('login')}
      </Button>
    </form>
  );
};
import { Button } from '@ui';
import { useForm } from 'react-hook-form';
import { Input, PasswordInput } from './Input';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { RegisterRequest } from '../types/auth.type';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { registerAsync } from '../services/auth.service';
import { useTranslation } from 'react-i18next';

export const RegisterForm = () => {
  const { t } = useTranslation();
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
      toast.success('Registration successful! Please Login to Your Account.');
      navigate('/login');
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
          {t('auth.back_to_home')}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src="../../assets/logo.svg" alt="logo" className="h-[3rem]" />
        <p className="text-sm">{t('auth.create_account')}</p>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          label={t('auth.username')}
          type="text"
          placeholder={t('auth.username_placeholder')}
          {...register('username', { required: true })}
        />
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

      <Button size="lg">{t('auth.create_account')}</Button>

      <div className="flex flex-col items-center justify-center gap-2 text-sm text-secondary-foreground">
        <p>
          {t('auth.already_have_account')}

          <span
            className="underline cursor-pointer hover:brightness-50"
            onClick={() => navigate('/login')}
          >
            {t('login')}
          </span>
        </p>
      </div>
    </form>
  );
};

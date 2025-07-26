import { Button } from '@ui';
import { Phone, MessageCircle } from 'lucide-react';
import { Input, TextArea } from './Input';
import { useTranslation } from 'react-i18next';

export const AgentContactForm = () => {
  const { t } = useTranslation();
  return (
    <form className="flex flex-col w-full max-w-md gap-4 px-10 py-6 border rounded-lg shadow-md bg-background border-border">
      <h4 className="text-xl font-semibold text-center">
        {t('auth.contact_agency')}
      </h4>

      {[
        { label: 'Name:', placeholder: t('auth.username') },
        { label: 'Email', placeholder: t('footer.email') },
        { label: 'Contact Number', placeholder: t('auth.phone') },
      ].map((field) => (
        <div key={field.label}>
          <Input
            label={`${field.placeholder}`}
            type={field.label === 'Email' ? 'email' : 'text'}
            id={field.label.toLowerCase()}
            name={field.label.toLowerCase()}
            required={field.label !== 'Contact Number'}
          />
        </div>
      ))}

      <div>
        <TextArea
          id="description"
          name="description"
          label={t('auth.desc')}
          rows={6}
        ></TextArea>
      </div>

      <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
        <Button size="lg">
          <Phone size={16} /> {t('call')}
        </Button>
        <Button size="lg">
          <MessageCircle size={16} /> {t('message')}
        </Button>
      </div>
    </form>
  );
};

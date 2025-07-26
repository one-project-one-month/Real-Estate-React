import { Button } from '@ui';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const SocialBubble = ({
  icon: Icon,
  variant,
  classname,
}: {
  icon: React.ElementType;
  variant: 'primary' | 'secondary' | 'outline';
  classname?: string;
}) => (
  <div
    className={`flex items-center justify-center w-8 h-8 transition rounded-full cursor-pointer ${variant === 'primary' ? 'bg-primary text-primary-foreground' : variant === 'secondary' ? 'bg-secondary text-secondary-foreground' : 'bg-transparent border border-secondary-foreground text-secondary-foreground'} hover:scale-105 ${classname}`}
  >
    <Icon className={`w-4 h-4 ${classname}`} />
  </div>
);

const FooterCTA = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col items-center justify-around gap-6 px-4 py-10 overflow-hidden bg-primary text-primary-foreground md:flex-row">
      <img
        src="/footer-abstract-1.png"
        className="absolute top-0 left-0 object-cover h-full pointer-events-none brightness-125"
        alt=""
      />
      <img
        src="/footer-abstract-2.png"
        className="absolute top-0 right-0 object-cover h-full pointer-events-none brightness-125"
        alt=""
      />

      <div className="z-20 max-w-3xl space-y-4 text-center md:text-left">
        <h2 className="text-xl font-semibold md:text-3xl">
          {t('footer.heading')}
        </h2>
        <p className="font-light text-xs leading-[2.5] md:text-base">
          {t('footer.desc')}
        </p>
      </div>

      <div className="z-20 mt-2 md:mt-0">
        <Button variant="secondary" size="lg">
          {t('footer.chat')}
        </Button>
      </div>
    </div>
  );
};

const EmailSubscription = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 bg-secondary text-secondary-foreground">
      <img src="../../assets/logo.svg" alt="logo" className="h-[3.5rem] mb-4" />
      <h3 className="mb-6 text-sm text-center md:text-base">
        {t('footer.sub_email')}{' '}
      </h3>

      <div className="flex items-center w-full max-w-2xl gap-3 px-4 py-3 my-5 border rounded-md sm:flex-row border-secondary-foreground">
        <div className="flex items-center w-full gap-3">
          <img
            src="../../assets/mail.svg"
            className="w-5 h-5"
            alt="Mail Icon"
          />
          <input
            type="email"
            placeholder={t('footer.email')}
            className="flex-1 text-sm text-black bg-transparent outline-none"
          />
        </div>
        <img
          src="../../assets/send.svg"
          className="w-5 h-5 cursor-pointer"
          alt="Send Icon"
        />
      </div>
    </div>
  );
};

const FooterBottom = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-between gap-3 px-5 py-6 md:flex-row bg-primary text-primary-foreground">
      <div className="flex flex-wrap justify-center gap-3 text-xs text-center md:justify-start md:text-left">
        <p className="cursor-pointer hover:underline">©2025 Pwel-Sar. {t('footer.footer_rights')}</p>
        <p className="cursor-pointer hover:underline"> {t('footer.footer_terms')}</p>
      </div>

      <div className="flex gap-2">
        <SocialBubble icon={Facebook} variant="secondary" />
        <SocialBubble icon={Twitter} variant="secondary" />
        <SocialBubble icon={Linkedin} variant="secondary" />
        <SocialBubble icon={Youtube} variant="secondary" />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <FooterCTA />
      <EmailSubscription />
      <FooterBottom />
    </footer>
  );
};

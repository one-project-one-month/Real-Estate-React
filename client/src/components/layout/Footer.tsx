import { Button } from '@ui';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const SocialBubble = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="flex items-center justify-center w-8 h-8 transition rounded-full cursor-pointer bg-secondary text-secondary-foreground hover:scale-105">
    <Icon className="w-4 h-4" />
  </div>
);

const FooterCTA = () => (
  <div className="relative flex flex-col items-center justify-around gap-4 py-10 overflow-hidden bg-primary text-primary-foreground md:flex-row">
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
        Start Your Real Estate Journey Today
      </h2>
      <p className="font-light text-xs leading-[2.5] md:text-base">
        Your dream property is just a click away. Whether you're searching for a
        new home, a smart investment, or trustworthy real estate guidance,
        Pwel-Sar is here to support you. Talk directly with our team — we're
        ready to listen, answer your questions, and guide you every step of the
        way.
      </p>
    </div>

    <div className="z-20 mt-6 md:mt-0">
      <Button variant="secondary" size="lg">
        Chat Now
      </Button>
    </div>
  </div>
);

const EmailSubscription = () => (
  <div className="flex flex-col items-center justify-center py-12 bg-secondary text-secondary-foreground">
    <img src="../../assets/logo.svg" alt="logo" className="h-[3.5rem]" />
    <h3 className="mb-8">
      Enter your email address to get the latest property notifications
    </h3>

    <div className="flex items-center justify-center w-full max-w-2xl gap-3 px-4 py-3 my-5 border rounded-md border-secondary-foreground">
      <img src="../../assets/mail.svg" className="w-5 h-5" alt="Mail Icon" />
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 text-sm bg-transparent outline-none"
      />
      <img
        src="../../assets/send.svg"
        className="w-5 h-5 cursor-pointer"
        alt="Send Icon"
      />
    </div>
  </div>
);

const FooterBottom = () => (
  <div className="flex flex-col items-center justify-between gap-4 px-5 py-4 md:flex-row bg-primary text-primary-foreground">
    <div className="flex flex-wrap gap-3 text-xs text-center md:text-left">
      <p className="cursor-pointer hover:underline">
        ©2025 Pwel-Sar. All Rights Reserved.
      </p>
      <p className="cursor-pointer hover:underline">Terms & Conditions</p>
    </div>

    <div className="flex gap-2">
      <SocialBubble icon={Facebook} />
      <SocialBubble icon={Twitter} />
      <SocialBubble icon={Linkedin} />
      <SocialBubble icon={Youtube} />
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <FooterCTA />
      <EmailSubscription />
      <FooterBottom />
    </footer>
  );
};

export default Footer;

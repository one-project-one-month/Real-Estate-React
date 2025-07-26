import { useTranslation } from 'react-i18next';

const features = [
  {
    title: 'explore_buy',
    figure: 'buy.svg',
    description: 'explore_buy_desc',
  },
  {
    title: 'explore_rent',
    figure: 'rental.svg',
    description: 'explore_rent_desc',
  },
  {
    title: 'explore_new',
    figure: 'condo.svg',
    description: 'explore_new_desc',
  },
  {
    title: 'explore_myanmar',
    figure: 'explore.svg',
    description: 'explore_myanmar_desc',
  },
];

const FeatureCard = ({
  title,
  description,
  figure,
}: {
  title: string;
  description: string;
  figure: string;
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center px-4 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4">
        <img
          src={`../../../assets/${figure}`}
          alt={figure}
          className="h-[5rem]"
        />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{t(`explore.${title}`)}</h3>
      <p className="text-sm leading-relaxed text-gray-500 sm:max-w-lg md:max-w-3xl">
        {t(`explore.${description}`)}
      </p>
    </div>
  );
};

export const Explore = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <h2 className="mb-10 font-semibold text-center md:text-3xl">
        {t('explore.explore_title')}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            figure={feature.figure}
          />
        ))}
      </div>
    </section>
  );
};

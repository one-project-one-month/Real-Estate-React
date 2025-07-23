const features = [
  {
    title: 'Buy Property',
    figure: 'buy.svg',
    description:
      "Discover a wide selection of properties for sale across Myanmar — from cozy homes to luxury estates. Whether you're a first-time buyer or seasoned investor, we make it easy to find the perfect place to call your own.",
  },
  {
    title: 'Property rentals',
    figure: 'rental.svg',
    description:
      'Looking for flexible living? Explore our curated rental listings in prime locations. From modern apartments to spacious family homes, find the rental that fits your lifestyle and budget.',
  },
  {
    title: 'New launch condos',
    figure: 'condo.svg',
    description:
      "Be the first to own a piece of the future. Our latest condo launches offer cutting-edge design, unbeatable amenities, and investment-ready value — all in the heart of Myanmar's most vibrant cities.",
  },
  {
    title: 'Explore Myanmar',
    figure: 'explore.svg',
    description:
      'From bustling cities to scenic landscapes, Myanmar has so much to offer. Explore hidden gems, local communities, and lifestyle hotspots — all while finding your perfect property match along the way.',
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
}) => (
  <div className="flex flex-col items-center px-4 text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4">
      <img
        src={`../../../assets/${figure}`}
        alt={figure}
        className="h-[5rem]"
      />
    </div>
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-500 sm:max-w-lg md:max-w-3xl">
      {description}
    </p>
  </div>
);

export const Explore = () => {
  return (
    <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <h2 className="mb-10 font-semibold text-center md:text-3xl">
        Explore Pwel-Sar
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

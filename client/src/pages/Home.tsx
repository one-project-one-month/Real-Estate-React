import {
  Hero,
  Ads,
  FeaturedProperties,
  Testimonials,
  Explore,
  ExploreCities,
} from '../components';

export const Home = () => {
  return (
    <section className="flex flex-col w-full gap-10">
      <Hero />
      <Ads />
      <ExploreCities />
      <FeaturedProperties />
      <Testimonials />
      <Explore />
    </section>
  );
};

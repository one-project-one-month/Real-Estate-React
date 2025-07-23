import { Hero, Ads, FeaturedProperties, Testimonials } from '../components';

export const Home = () => {
  return (
    <section className="flex flex-col w-full">
      <Hero />
      <Ads />
      <FeaturedProperties />
      <Testimonials />
    </section>
  );
};

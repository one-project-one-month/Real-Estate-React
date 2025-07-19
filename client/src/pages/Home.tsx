import React from 'react';
import FeaturedProperties from '../components/FeaturedProperties';
import Ads from '../components/Ads';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return <section className="flex flex-col w-full">
    <Ads/>
    <FeaturedProperties/>
    <Testimonials/>
  </section>;
};

export default Home;

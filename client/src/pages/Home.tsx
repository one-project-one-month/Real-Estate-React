import { Button } from '@ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedProperties from '../components/FeaturedProperties';
import Ads from '../components/Ads';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full">
      <Hero />
      <Ads />
      <FeaturedProperties />
      <Testimonials />
    </section>
  );
  return;
};

export default Home;

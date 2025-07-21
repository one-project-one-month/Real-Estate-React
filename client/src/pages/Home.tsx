import { Button } from '@ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedProperties from '../components/FeaturedProperties';
import Ads from '../components/Ads';
import Testimonials from '../components/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col w-full">
      <Button variant="link" onClick={() => navigate('login')}>
        Login
      </Button>
      <Button variant="link" onClick={() => navigate('registration')}>
        Register
      </Button>
      <Ads />
      <FeaturedProperties />
      <Testimonials />
    </section>
  );
  return;
};

export default Home;

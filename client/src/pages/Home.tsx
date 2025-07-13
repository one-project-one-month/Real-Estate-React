import React from 'react';
import { Button } from '@ui';

const Home = () => {
  return (
    <div>
      <Button
        variant="default"
        className="bg-gradient-to-r from-primary to-accent"
      >
        Default
      </Button>
      <Button
        variant="outline"
        className="bg-gradient-to-r from-background via-secondary to-primary"
      >
        Outline
      </Button>
    </div>
  );
};

export default Home;

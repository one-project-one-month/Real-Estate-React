import { Button, Card, CardContent, CardImage } from '@ui';
import React from 'react';

export const ExploreOnMap = () => {
  return (
    <Card className="w-full max-w-md p-6 space-y-5 transition-none border shadow-sm hover:translate-y-0 rounded-2xl border-border bg-background">
      <h1 className="text-gray-500 text-md">Explore On Map</h1>

      <CardContent>
        <CardImage
          src="/map.png"
          alt="Explore on map"
          className="cursor-pointer"
        />
      </CardContent>
      <Button size="lg" className="w-full">
        Find
      </Button>
    </Card>
  );
};

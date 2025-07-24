import { Card } from '@ui';
import React from 'react';

export const PostFilterCard = () => {
  return (
    <div className="flex">
      <Card className="transition-none hover:translate-y-0 border border-border h-[500px] flex items-center justify-center">
        <span className="text-black">Filter Card</span>
      </Card>
    </div>
  );
};

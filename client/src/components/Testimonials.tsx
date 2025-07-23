import { Button, Card, CardContent, CardFooter } from '@ui';
import { Star } from 'lucide-react';

const TestimonialHeader = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex flex-col max-w-2xl space-y-4 text-center md:text-left">
        <h2 className="text-xl font-semibold md:text-3xl ">
          What Our Clients Say
        </h2>
        <p className="text-sm text-gray-500 sm:max-w-lg md:max-w-3xl">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
      </div>
      <Button size="lg">View All Testimonials</Button>
    </div>
  );
};

const Rating = ({ value }) => {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          className={`size-4 ${
            index < value ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = () => (
  <Card variant="default" size="default" className="border border-border">
    <Rating value={5} />
    <CardContent className="py-2">
      <h3 className="text-lg font-semibold text-black">Exceptional Service</h3>
      <p className="font-normal text-left text-black line-clamp-4 ">
        Our experience with Estatein was outstanding. Their team's dedication
        and professionalism made finding our dream home a breeze. Highly
        recommended!
      </p>
    </CardContent>
    <CardFooter>
      <div className="flex items-start gap-4 text-sm">
        <img
          className="object-cover w-12 h-12 overflow-hidden rounded-full "
          src="/agent/agent.png"
          alt={'agent'}
        />
        <div className="flex flex-col items-start gap-1 font-semibold">
          <p className="text-black">Wade Warren</p>
          <span className="mt-auto text-gray-500">USA, California</span>
        </div>
      </div>
    </CardFooter>
  </Card>
);

const TestimonialCardGroup = () => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
    {[0, 1, 2].map((index) => (
      <TestimonialCard key={index} />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <TestimonialHeader />
      <TestimonialCardGroup />
    </section>
  );
};

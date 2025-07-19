import { Button, Card, CardContent, CardFooter } from '@ui';
import { Star } from 'lucide-react';

const TestimonialHeader = () => {
  return (
    <div className="flex  items-center justify-between  py-5">
      <div className="flex items-start space-y-2 flex-col">
        <h2 className="text-2xl font-semibold md:text-3xl ">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 sm:max-w-lg md:max-w-3xl text-sm">
          Read the success stories and heartfelt testimonials from our valued
          clients. Discover why they chose Estatein for their real estate needs.
        </p>
      </div>
      <Button variant="default" className="rounded-xl text-wrap font-normal" size="lg">
        View All Testimonials
      </Button>
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
  <Card variant="default" size="default">
    <Rating value={5} />
    <CardContent className="py-2">
      <h3 className="font-semibold text-black text-lg">Exceptional Service</h3>
      <p className="text-left text-black  font-normal  line-clamp-4 ">
        Our experience with Estatein was outstanding. Their team's dedication
        and professionalism made finding our dream home a breeze. Highly
        recommended!
      </p>
    </CardContent>
    <CardFooter>
      <div className="text-sm flex items-start gap-4">
        <img
          className="rounded-full object-cover w-12 h-12  overflow-hidden "
          src="/agent/agent.png"
          alt={'agent'}
        />
        <div className="flex flex-col font-semibold gap-1 items-start">
          <p className="text-black">Wade Warren</p>
          <span className="mt-auto text-gray-500">USA, California</span>
        </div>
      </div>
    </CardFooter>
  </Card>
);

const TestimonialCardGroup = () => (
  <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-3">
    {[0, 1, 2, ].map((index) => (
      <TestimonialCard key={index} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="w-full sm:max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto px-4 lg:px-0 py-6">
      <TestimonialHeader />
      <TestimonialCardGroup />
    </section>
  );
};

export default Testimonials;

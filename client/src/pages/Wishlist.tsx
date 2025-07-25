import { BreadcrumbNavigator } from '../components';

export const Wishlist = () => {
  return (
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <BreadcrumbNavigator
        paths={[
          { label: 'Home', href: '/' },
          {
            label: 'Your Wishlist',
            isCurrent: true,
          },
        ]}
      />
    </section>
  );
};

import { Button } from '@ui';

const AdsCard = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      {/* Ads card one */}
      <div className="h-[170px] shadow-lg transition-all hover:-translate-y-1 duration-500 w-full grid grid-cols-2 rounded-xl overflow-hidden bg-gradient-to-r from-white to-gradientads">
        <div className="relative w-full min-h-full">
          <img
            src="/ads/ads-1.png"
            alt="M Tower Condo"
            className="object-cover w-full h-full rounded-md rounded-e-none"
          />

          {/* Discount Badge */}
          <div className="absolute z-10 w-20 h-20 top-2 left-2">
            <div className="relative w-full h-full">
              <img
                src="/assets/discount-frame.svg"
                alt="Discount Frame"
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center font-bold leading-tight text-center text-black">
                <span className="text-lg">25%</span>
                <span className="text-xs">Discount</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-2">
          <div className="flex items-center gap-2 mb-1">
            <img
              src="/assets/logo/logo-white.svg"
              alt="Logo"
              className="w-10 h-10"
            />
            <h2 className="text-lg font-semibold text-white">M Tower Condo</h2>
          </div>

          <div className="flex items-center flex-1">
            <p
              className="font-semibold text-white text-md"
              style={{ textShadow: '0 1px 4px rgba(255, 255, 255, 0.3)' }}
            >
              No.1 Best Condo in Myanmar
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-3 py-2 ml-auto text-black rounded-sm bg-gold w-fit">
            <span className="text-xs">Price start at</span>
            <span className="font-semibold">$7000.00</span>
          </div>
        </div>
      </div>

      {/* Ads Card 2*/}
      <div className="h-[170px] shadow-lg transition-all hover:-translate-y-1 duration-500 w-full grid grid-cols-2 rounded-xl overflow-hidden bg-gradient-to-r from-white to-primary">
        <div className="relative w-full min-h-full">
          <img
            src="/ads/ads-2.png"
            alt="M Tower Condo"
            className="object-cover w-full h-full rounded-md rounded-e-none"
          />
        </div>

        <div className="flex flex-col p-2">
          <div className="flex items-center justify-between gap-2 mb-1">
            <img
              src="/assets/logo/logo-white.svg"
              alt="Logo"
              className="w-10 h-10"
            />

            <div className="px-4 py-2 bg-red-500 rounded-tl-2xl rounded-br-2xl">
              Available now
            </div>
          </div>

          <div className="flex items-center flex-1">
            <p
              className="font-semibold text-white text-md"
              style={{ textShadow: '0 1px 4px rgba(255, 255, 255, 0.3)' }}
            >
              Office space at MICT Park
            </p>
          </div>

          <Button variant="white" className="rounded-sm w-fit" size="sm">
            Contact now
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Ads = () => {
  return (
    <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <AdsCard />
    </section>
  );
};

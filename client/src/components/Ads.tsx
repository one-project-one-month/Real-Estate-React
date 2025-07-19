import { Button } from '@ui';

const AdsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {/* Ads card one */}
      <div className="h-[170px] shadow-lg transition-all hover:-translate-y-1 duration-500 w-full grid grid-cols-2 rounded-xl overflow-hidden bg-gradient-to-r from-white to-gradientads">
        <div className="relative w-full min-h-full">
          <img
            src="/ads/ads-1.png"
            alt="M Tower Condo"
            className="w-full h-full object-cover rounded-md rounded-e-none"
          />

          {/* Discount Badge */}
          <div className="absolute top-2 left-2 z-10 w-20 h-20">
            <div className="relative w-full h-full">
              <img
                src="/assets/discount-frame.svg"
                alt="Discount Frame"
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black font-bold leading-tight text-center">
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

          <div className="flex-1 flex items-center">
            <p
              className="text-md font-semibold text-white"
              style={{ textShadow: '0 1px 4px rgba(255, 255, 255, 0.3)' }}
            >
              No.1 Best Condo in Myanmar
            </p>
          </div>

            <Button
              className="bg-gold text-black hover:bg-gold/90 rounded-sm py-5 w-fit ml-auto"
              size="sm"
            >
              Price start at
              <br />
              $7000.00
            </Button>
        </div>
      </div>

      {/* Ads Card 2*/}
      <div className="h-[170px] shadow-lg transition-all hover:-translate-y-1 duration-500 w-full grid grid-cols-2 rounded-xl overflow-hidden bg-gradient-to-r from-white to-primary">
        <div className="relative w-full min-h-full">
          <img
            src="/ads/ads-2.png"
            alt="M Tower Condo"
            className="w-full h-full object-cover rounded-md rounded-e-none"
          />
        </div>

        <div className="flex flex-col p-2">
          <div className="flex items-center justify-between gap-2 mb-1">
            <img
              src="/assets/logo/logo-white.svg"
              alt="Logo"
              className="w-10 h-10"
            />

            <Button
              className="bg-red-500 hover:bg-red-500/90 rounded-sm"
              size="sm"
            >
              Available now
            </Button>
          </div>

          <div className="flex-1 flex items-center">
            <p
              className="text-md font-semibold text-white"
              style={{ textShadow: '0 1px 4px rgba(255, 255, 255, 0.3)' }}
            >
              Office space at MICT Park
            </p>
          </div>

          <Button variant="white" className="w-fit rounded-sm" size="sm">
            Contact now
          </Button>
        </div>
      </div>
    </div>
  );
};

const Ads = () => {
  return (
    <section className="w-full sm:max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto  px-4 lg:px-0 py-6">
      <AdsCard />
    </section>
  );
};

export default Ads;

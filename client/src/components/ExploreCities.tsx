import mockData from '@mocks';
import { useNavigate } from 'react-router-dom';
import { PostType } from '@types';

const CityCard = ({ name, count }: { name: string; count: number }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] cursor-pointer"
      onClick={() =>
        navigate(
          `/properties?postType=${PostType.Sale}&township=${name.toLowerCase()}`
        )
      }
    >
      <div className="w-full mb-3 overflow-hidden bg-gray-200 rounded-full aspect-square">
        <img
          src="/yangon.jpg"
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-base font-semibold text-center text-black sm:text-lg">
        {name}
      </div>
      <div className="text-xs text-center text-gray-500 hover:underline sm:text-sm">
        {count} Property{count !== 1 ? 'ies' : ''}
      </div>
    </div>
  );
};

export const ExploreCities = () => {
  let topTownships: { township: string; propCount: number }[] = [];
  mockData.properties.forEach((prop) => {
    if (prop.township) {
      const existingTownship = topTownships.find(
        (t) => t.township === prop.township
      );
      if (existingTownship) {
        existingTownship.propCount++;
      } else {
        topTownships.push({ township: prop.township, propCount: 1 });
      }
    }
  });
  topTownships = topTownships
    .sort((a, b) => b.propCount - a.propCount)
    .slice(0, 5);

  return (
    <section className="w-full px-4 py-8 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl">
      <div className="flex flex-col items-center justify-center gap-2 pb-6">
        <h5 className="text-sm text-secondary-foreground sm:text-base">
          Explore Cities
        </h5>
        <h2 className="text-xl font-semibold text-center sm:text-2xl md:text-3xl">
          Top Locations For You
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
        {topTownships.map((township) => (
          <CityCard
            key={township.township}
            name={township.township}
            count={township.propCount}
          />
        ))}
      </div>
    </section>
  );
};

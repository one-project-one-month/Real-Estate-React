import mockData from '@mocks';
import { useNavigate } from 'react-router-dom';

const CityCard = ({ name, count }: { name: string; count: number }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center w-full cursor-pointer"
      onClick={() => navigate(`/properties?postType=Sale&township=${name}`)}
    >
      <div className="flex items-center justify-center w-[150px] h-[150px] mb-3 overflow-hidden bg-gray-200 rounded-full">
        <img
          src="/yangon.jpg"
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-lg font-semibold text-black">{name}</div>
      <div className="text-sm text-center text-gray-500 cursor-pointer hover:underline">
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
    .slice(0, 6);

  return (
    <section className="w-full px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <div className="flex flex-col items-center justify-center gap-3 pb-5">
        <h5 className="text-sm text-secondary-foreground md:text-base">
          Explore Cities
        </h5>
        <h2 className="mb-2 font-semibold md:text-3xl">
          Top Locations For You
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6 justify-items-center">
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

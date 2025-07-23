import mockData from '@mocks';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Properties = () => {
  const [postList, setPostList] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const searchRegion = params.get('region') || '';
  const searchPostType = params.get('postType') || 'sale';
  const searchMinPrice = params.get('minPrice') || '';
  const searchMaxPrice = params.get('maxPrice') || '';
  const searchPropertyType = params.get('propertyType') || '';
  const searchTownship = params.get('township') || '';

  useEffect(() => {
    const list = mockData.posts.filter((post) => {
      const prop = mockData.properties.find(
        (property) => property.id === post.propertyId
      );

      const matches = {
        region: searchRegion
          ? prop?.region.toLowerCase() === searchRegion.toLowerCase()
          : true,
        postType: searchPostType
          ? post.type.toLowerCase() === searchPostType.toLowerCase()
          : true,
        minPrice: searchMinPrice
          ? prop && prop.price >= Number(searchMinPrice)
          : true,
        maxPrice: searchMaxPrice
          ? prop && prop.price <= Number(searchMaxPrice)
          : true,
        propertyType: searchPropertyType
          ? prop &&
            prop.propertyTypeId ===
              mockData.propertyTypes.find(
                (type) =>
                  type.name.toLowerCase() === searchPropertyType.toLowerCase()
              )?.id
          : true,
        township: searchTownship
          ? prop &&
            prop.township?.trim().toLowerCase() ===
              searchTownship.trim().toLowerCase()
          : true,
      };

      return Object.values(matches).every(Boolean);
    });

    setPostList(list);
  }, [
    searchRegion,
    searchPostType,
    searchMinPrice,
    searchMaxPrice,
    searchPropertyType,
    searchTownship,
  ]);

  return (
    <section>
      <div className="p-4 overflow-auto font-mono text-sm text-green-400 whitespace-pre bg-gray-900 rounded-md">
        {postList.length === 0 ? (
          <p className="text-center text-gray-500">No posts found.</p>
        ) : (
          postList.map((post) => {
            const prop = mockData.properties.find(
              (property) => property.id === post.propertyId
            );

            const propertyType = mockData.propertyTypes.find(
              (type) => type.id === prop?.propertyTypeId
            );

            return (
              <div key={post.id} className="p-4 mb-4 border rounded">
                <h3 className="mb-2 text-lg font-bold">Post #{post.id}</h3>
                <p className="mb-2">{post.description}</p>

                {prop && (
                  <div className="p-3 text-sm text-gray-700 rounded bg-gray-50">
                    <p>
                      <strong>Type:</strong> {propertyType?.name || 'Unknown'}
                    </p>
                    <p>
                      <strong>Location:</strong> {prop.buildingNumber},{' '}
                      {prop.street}, {prop.township}, {prop.region}
                    </p>
                    <p>
                      <strong>Bedrooms:</strong> {prop.bedRoom} |{' '}
                      <strong>Bathrooms:</strong> {prop.bathRoom}
                    </p>
                    <p>
                      <strong>Floor:</strong> {prop.floor}
                    </p>
                    <p>
                      <strong>Size:</strong> {prop.length}m × {prop.width}m
                    </p>
                    <p>
                      <strong>Price:</strong> {prop.price.toLocaleString()}{' '}
                      {prop.currency}
                    </p>
                  </div>
                )}

                <div className="mt-2 text-xs text-gray-500">
                  <p>
                    <strong>Contact Phone:</strong> {post.phone}
                  </p>
                  <p>
                    <strong>Social:</strong>{' '}
                    <a
                      href={post.socialLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      {post.socialLink}
                    </a>
                  </p>
                  <p>
                    <strong>Posted On:</strong>{' '}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

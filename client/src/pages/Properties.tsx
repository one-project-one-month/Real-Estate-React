import mockData from '@mocks';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Properties = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const searchRegion = params.get('region') || '';
  const searchPostType = params.get('postType') || 'Sale';
  const searchMinPrice = params.get('minPrice') || '';
  const searchMaxPrice = params.get('maxPrice') || '';
  const searchPropertyType = params.get('propertyType') || '';

  useEffect(() => {
    const list = mockData.posts.filter((post) => {
      const prop = mockData.properties.find(
        (property) => property.id === post.propertyId
      );
      return (
        (searchRegion ? prop?.region === searchRegion : true) &&
        (searchPostType ? post.type === searchPostType : true) &&
        (searchMinPrice
          ? prop && prop.price >= Number(searchMinPrice)
          : true) &&
        (searchMaxPrice
          ? prop && prop.price <= Number(searchMaxPrice)
          : true) &&
        (searchPropertyType
          ? prop &&
            prop.propertyTypeId ===
              mockData.propertyTypes.find(
                (type) => type.name === searchPropertyType
              )?.id
          : true)
      );
    });
    setPostList(list);
  }, [
    searchRegion,
    searchPostType,
    searchMinPrice,
    searchMaxPrice,
    searchPropertyType,
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

            const postType = mockData.propertyTypes.find(
              (type) => type.id === prop.propertyTypeId
            );

            return (
              <div key={post.id} className="p-4 mb-4 border rounded">
                <h3 className="mb-2 text-lg font-bold">Post #{post.id}</h3>
                <p className="mb-2">{post.description}</p>

                {prop && (
                  <div className="p-3 text-sm text-gray-700 rounded bg-gray-50">
                    <p>
                      <strong>Type:</strong> {postType?.name || 'Unknown'}
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

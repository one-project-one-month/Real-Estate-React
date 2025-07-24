import { useLocation, useNavigate } from 'react-router-dom';
import {
  PostSearchBar,
  ExploreOnMap,
  PostFilterCard,
  PostListing,
} from '../components';
import { PostQueryParams } from 'src/types/post.type';
import { useEffect, useState } from 'react';
import { Post } from 'src/types/model.type';
import mockData from '@mocks';
import { filterPostsByQuery, formatPath } from '@utils';

export const Properties = () => {
  const [list, setList] = useState<Post[]>(mockData.posts);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    const query: PostQueryParams = {
      region: params.get('region') || undefined,
      township: params.get('township') || undefined,
      street: params.get('street') || undefined,
      propertyType: params.get('propertyType') || undefined,
      postType: params.get('postType') || undefined,
      minPrice: params.get('minPrice')
        ? Number(params.get('minPrice'))
        : undefined,
      maxPrice: params.get('maxPrice')
        ? Number(params.get('maxPrice'))
        : undefined,
      search: params.get('search') || undefined,
    };

    const filteredList = filterPostsByQuery(query);
    setList(filteredList);
  }, [location.search]);

  const handleSearch = (query: PostQueryParams) => {
    const path = formatPath('/properties', query);
    navigate(path);
  };

  return (
    <section className="flex flex-col w-full">
      <ExploreOnMap />
      <div className="flex items-center justify-center w-full px-4 py-8">
        <PostSearchBar filterIncluded={false} onSearch={handleSearch} />
      </div>
      <section className="grid w-full grid-cols-3 gap-5 px-4 py-8 mx-auto md:flex-row sm:max-w-3xl md:max-w-4xl lg:max-w-7xl">
        <PostFilterCard />
        <PostListing posts={list} />
      </section>
    </section>
  );
};

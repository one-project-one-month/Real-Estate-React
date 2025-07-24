import React from 'react';
import { PostSearchBar } from './PostSearchBar';
import { PostQueryParams } from 'src/types/post.type';
import { formatPath } from '@utils';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  const handleSearch = (query: PostQueryParams) => {
    let path = formatPath('/properties', query);
    navigate(path);
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[350px] md:min-h-[420px] bg-cover bg-center"
      style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
    >
      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h1 className="mt-10 mb-8 text-2xl font-bold text-center text-white md:text-4xl drop-shadow-lg">
          Myanmar's Smarter Property Search
        </h1>
        <PostSearchBar filterIncluded={true} onSearch={handleSearch} />
      </div>
    </section>
  );
};

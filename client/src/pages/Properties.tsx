import { useNavigate } from 'react-router-dom';
import {
  PostSearchBar,
  ExploreOnMap,
  PostFilterCard,
  PostListing,
  BreadcrumbNavigator,
} from '../components';
import { PostQueryParams } from '../types/post.type';
import { PostType } from '@types';
import { formatPath } from '@utils';
import { useTranslation } from 'react-i18next';

export const Properties = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSearch = (query: PostQueryParams) => {
    const path = formatPath('/properties', query);
    navigate(path);
  };

  return (
    <section className="flex flex-col w-full gap-10 px-4 py-6 mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl lg:px-0">
      <BreadcrumbNavigator
        paths={[
          { label: t('home'), href: '/' },
          {
            label: t('properties'),
            isCurrent: true,
          },
        ]}
      />
      <div className="flex items-center justify-center w-full px-4">
        <PostSearchBar filterIncluded={false} onSearch={handleSearch} />
      </div>
      <section className="grid w-full grid-cols-3 gap-5 px-4 py-8 mx-auto md:flex-row sm:max-w-3xl md:max-w-4xl lg:max-w-7xl">
        <div className="flex flex-col gap-3">
          <PostFilterCard postType={PostType.Sale} />
          <ExploreOnMap />
        </div>
        <PostListing />
      </section>
    </section>
  );
};

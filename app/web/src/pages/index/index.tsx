import React, { FC } from 'react';
import {} from 'alita';
import qs from 'qs';
import fetcher from '@/utils/fetcher';
import styles from './index.less';
import NewsItem from '@/components/NewsItem';

interface HomePageProps {
  newsList: any[];
}

const HomePage: FC<HomePageProps> = ({ newsList }) => {
  const renderNewsItem = (newsItem: any) => {
    return <NewsItem key={newsItem.id} news={newsItem} />;
  };
  return <div className={styles.page}>{newsList?.map?.(renderNewsItem)}</div>;
};

HomePage.getInitialProps = async (ctx: any) => {
  const { isServer, history, pageSize } = ctx;
  const query = qs.parse(history.location.search, {
    ignoreQueryPrefix: true,
  }) as any;
  if (isServer) {
    const { service } = ctx;
    const newsList = await service.news.getNewsList(query.page);
    return { newsList, pageSize };
  }
  const newsList = (await fetcher.get('/api/news', { params: { page: query.page } })).data || [];
  return { newsList, pageSize: 20 };
};

export default HomePage;

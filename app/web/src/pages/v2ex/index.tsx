import React, { FC } from 'react';
import { IGetInitialProps } from 'alita';
import { getHotTopics } from './service';
import NewsItem from '@/components/NewsItem';
import styles from './index.less';

interface V2exProps {
  hotToipcs: any[];
}

const V2exPage: FC<V2exProps> & { getInitialProps: IGetInitialProps } = ({ hotToipcs }) => {
  const renderNewsItem = (topic: any) => {
    return (
      <NewsItem
        key={topic.id}
        news={{
          title: topic.title,
          url: topic.url,
          by: topic.member?.username,
          time: topic.created,
        }}
      />
    );
  };
  return <div className={styles.page}>{hotToipcs?.map?.(renderNewsItem)}</div>;
};

V2exPage.getInitialProps = async (ctx) => {
  const { isServer } = ctx;
  if (isServer) {
    const { service } = ctx;
    const hotToipcs = await service.v2ex.getHotTopics();
    return { hotToipcs };
  }
  const hotToipcs = (await getHotTopics()) || [];
  return { hotToipcs };
};

export default V2exPage;

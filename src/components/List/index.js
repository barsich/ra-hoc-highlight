/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import withPopularity from '../../HOCs';
import Article from './Article';
import Video from './Video';

const VideoWithPopularity = withPopularity(Video);
const ArticleWithPopularity = withPopularity(Article);

export default function List(props) {
  return props.list.map((item) => {
    switch (item.type) {
      case 'video':
        return <VideoWithPopularity {...item} />;

      case 'article':
        return <ArticleWithPopularity {...item} />;
    }
  });
}

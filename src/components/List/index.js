/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import withPopularity from '../../HOCs';
import Article from './Article';
import Video from './Video';
import {v4 as uuidv4} from 'uuid'

const VideoWithPopularity = withPopularity(Video);
const ArticleWithPopularity = withPopularity(Article);

export default function List(props) {
  return props.list.map((item) => {
    const id = uuidv4();
    switch (item.type) {
      case 'video':
        return <VideoWithPopularity {...item} key={id} />;

      case 'article':
        return <ArticleWithPopularity {...item} key={id} />;
    }
  });
}

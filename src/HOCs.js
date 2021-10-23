import New from './components/List/New';
import Popular from './components/List/Popular';

export default function withPopularity(Component) {
  return (props) => {
    const { views } = props;
    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
  };
}

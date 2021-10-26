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
    } else if (views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    } else {
      return <Component {...props} />;
    }
  };
}

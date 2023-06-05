import { CirclesWithBar } from 'react-loader-spinner';
import css from './Loader.module.scss';
function Loader() {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#DD58D6"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
}

export default Loader;

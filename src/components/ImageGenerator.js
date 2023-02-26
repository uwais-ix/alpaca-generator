import {useApp} from '../store/AlpacaProvider';
import ImageComponent from './ImageComponent';

const ImageGenerator = (props) => {
  const {current, assets} = useApp();
  const arr = [];

  for (let key in current) {
    let id = current[key];
    let imgUrl = assets[key][id];
    let className = `--${key}`;

    arr.push(
      <ImageComponent
        key={key}
        imgUrl={imgUrl}
        className={className}
      />
    );
  }

  return <div className='m-8 relative'>{arr.map((val) => val)}</div>;
};

export default ImageGenerator;

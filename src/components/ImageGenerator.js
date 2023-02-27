import {useApp} from '../store/AlpacaProvider';
import ImageComponent from './ImageComponent';
import {forwardRef} from 'react';

const ImageGenerator = forwardRef((props, ref) => {
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

  return (
    <div
      className='relative block border-slate-400 rounded-lg shadow-md border-4 max-w-lg mb-5'
      ref={ref}
    >
      {arr.map((val) => val)}
    </div>
  );
});

export default ImageGenerator;

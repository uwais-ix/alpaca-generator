import {forwardRef} from 'react';
import Button from '../UI/Button';

import {captureElement} from '../utils/downloadImage';
import {useAppDispatcher} from '../store/AlpacaProvider';

const Actions = forwardRef((props, ref) => {
  const dispatch = useAppDispatcher();
  return (
    <div className='flex'>
      <Button
        actionButton={true}
        onClick={() => {
          dispatch({type: 'randomize'});
        }}
      >
        Randomize
      </Button>
      <Button
        actionButton={true}
        onClick={() => {
          captureElement(ref.current);
        }}
      >
        Download
      </Button>
    </div>
  );
});

export default Actions;

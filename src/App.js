import AlpacaProvider from './store/AlpacaProvider';
import ImageGenerator from './components/ImageGenerator';
import Options from './components/Options';
import Actions from './components/Actions';
import {useRef} from 'react';

function App() {
  const alpacaImgRef = useRef(null);

  return (
    <AlpacaProvider>
      <div className='flex flex-col'>
        <ImageGenerator ref={alpacaImgRef} />
        <Actions ref={alpacaImgRef} />
      </div>
      <div>
        <Options />
      </div>
    </AlpacaProvider>
  );
}

export default App;

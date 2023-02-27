import AlpacaProvider from './store/AlpacaProvider';
import ImageGenerator from './components/ImageGenerator';
import Options from './components/Options';
import Actions from './components/Actions';
import {useRef} from 'react';

function App() {
  const alpacaImgRef = useRef(null);

  return (
    <AlpacaProvider>
      <h1 className='font-bold text-5xl m-10 ml-0'>Alpaca Generator</h1>
      <div className='flex space-x-32'>
        <div className='flex flex-col'>
          <ImageGenerator ref={alpacaImgRef} />
          <Actions ref={alpacaImgRef} />
        </div>
        <div className='max-w-lg'>
          <Options />
        </div>
      </div>
    </AlpacaProvider>
  );
}

export default App;

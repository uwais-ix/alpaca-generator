import AlpacaProvider from './store/AlpacaProvider';
import ImageGenerator from './components/ImageGenerator';
import Options from './components/Options';

function App() {
  return (
    <AlpacaProvider>
      <div>
        <ImageGenerator />
      </div>
      <div>
        <Options />
      </div>
    </AlpacaProvider>
  );
}

export default App;

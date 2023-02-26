import AlpacaProvider from './store/AlpacaProvider';
import ImageGenerator from './components/ImageGenerator';

function App() {
  return (
    <AlpacaProvider>
      <div>
        <ImageGenerator/>
      </div>
    </AlpacaProvider>
  );
}

export default App;

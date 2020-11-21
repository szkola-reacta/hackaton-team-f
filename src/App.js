import OfferList from './components/OfferList/OfferList';
import './App.css';

import Searching from './components/Searching/Searching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <Searching/>
      </div>
    <OfferList/>
    </div>
  );
}
export default App;

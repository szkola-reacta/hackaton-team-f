import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

import Search from './views/Search';
import Contact from './views/Contact';
import Homepage from './views/Homepage';
import Booking from './views/Booking';
import OfferList from './components/OfferList/OfferList';

function App() {
  return (
    <div>
  <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className='App-menu'>
            <li className='App-menu__item'><NavLink to='/'>Start</NavLink></li>
            <li className='App-menu__item'><NavLink to='search'>Search</NavLink></li>
            <li className='App-menu__item'><NavLink to='booking'>Booking</NavLink></li>
            <li className='App-menu__item'><NavLink to='contact'>Contact</NavLink></li>
          </ul>
        </header>
        <div>
          <Switch>
              <Route exact path='/' component={Homepage}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/search' component={Search}/>
              <Route path='/booking' component={Booking}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
  <OfferList/>
    </div>
  
}
export default App;

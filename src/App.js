import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import axios from "axios";
import React,{Component} from 'react';
import Search from './views/Search';
import Contact from './views/Contact';
import Homepage from './views/Homepage';
import Booking from './views/Booking';

class  App extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    this.loadData();
  }
  loadData() {
    let itemUrl = `http://localhost:3001/offer`;
    let data;
    axios.get(itemUrl).then((response) => {
      data = response.data;
      this.setState({
        data: data,
      });
    });
  }
  render(){
    const {data} = this.state;
    return (
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
                  <Route exact path='/'  component={()=> <Homepage data= {data}/>}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/search' component={Search}/>
                  <Route path='/booking' component={Booking}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      );
  }

}
export default App;
// TODO: 
// componentDidMount - wczytanie elementów z bd i przekazanie propsem
// do komponentu OfferList oraz Item
// useEffect
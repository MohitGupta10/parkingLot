import React from 'react';
import {Parking} from './components/parking';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter , Route} from 'react-router-dom';

function App() {
  return (
  
  <BrowserRouter>
  <div className="App">
  	<Route  exact path='/'  component={Parking} />
  	<Route path='/list' component={Parking} />
  	</div>
  </BrowserRouter>
  	
  	
  );
}

export default App;

import React ,{Component} from 'react';
import NavBar from './components/NavBar/Navbar'

import './App.scss';
import TourList from './components/TourList';

class App extends Component {
  render(){
  return(
    
    <main><NavBar/>
    <TourList/></main>
  );
      
  
  }

   
    
}

export default App;

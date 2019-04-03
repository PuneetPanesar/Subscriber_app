import React, { Component } from 'react';
import Input from './container/Input_info/Input_info';
import {BrowserRouter,Route} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        
       
       <Route path="/" exact component={Input} />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Search from "./components/search/Search";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component{
  render(){
    return(
      <MuiThemeProvider>
      <div>
      <Search />
  
      </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
// 22218786-ea1f20e1c5dc0b941cb486cad
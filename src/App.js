import React from 'react';
import Top from './pages/Top'
import Search from './pages/Search'
import Watch from './pages/Watch'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/watch' render={(props) => <Watch ></Watch>}></Route>
        <Route path='/search' render={(props) => <Search ></Search>}></Route>
        <Route path='/' render={(props) => <Top ></Top>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

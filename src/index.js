import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import Routes from './routes';

const App = () => {
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}








ReactDOM.render(<App />, document.getElementById('root'));


//git add . && git commit -m "setting up new project" && git push && git status

import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';

import './App.css';
import Login from './components/Login'
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Navigation/>
          <Routes/>
      </BrowserRouter>
        <h1>Hello world</h1>
        <Login></Login>
      </header>
    </div>
  );
}

export default App;

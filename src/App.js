import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';

import './App.css';
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Login></Login>
      </header>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <p>lorem dnkgnkdekngkn g golojtoeoj ojeohtohze ohtoheoh</p>
      </header>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

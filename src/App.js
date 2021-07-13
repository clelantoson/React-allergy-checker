import './App.css';
import Button from '@material-ui/core/Button';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Login></Login>
        <Button variant="contained" color="primary">
         Test Material UI
        </Button>
      </header>
    </div>
  );
}

export default App;

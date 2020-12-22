import logo from './logo.svg';
import './App.css';
import Movie from './views';
import ContextMovie from './context';

function App() {
  return (
    <div className="App">
      <ContextMovie>
        <Movie></Movie>
      </ContextMovie>
    </div>
  );
}

export default App;

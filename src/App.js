import './App.css';
import Header from './components/Header';
import { Route } from 'wouter'
import Notes from './pages/Notes';

function App() {
  return (
    <div className="App">
      <Header />
      <Route
        path = "/"
        component = { Notes }
      />
    </div>
  );
}

export default App;

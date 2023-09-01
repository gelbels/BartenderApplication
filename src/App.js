import './App.css';
import navbar from "./components/navbar";
import footer from "./components/footer";
import home from "./pages/home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Router>
      <navbar />
      <Switch>
        <Route path="/" exact component={home} />
      </Switch>
      <footer />
    </Router>
  </div>);
}

export default App;

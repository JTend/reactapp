import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cards from './components/cards'
import Home from './components/home'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/cards"> <Cards/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

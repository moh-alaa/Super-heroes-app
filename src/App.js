// import styles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Hero from './pages/Hero';
import {Header} from "./components/Header/Header";

function App() {
  return (
    <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/search'>
          <Search />
        </Route>

        <Route path='/favorites'>
          <Favorites />
        </Route>

        <Route path='/hero/:id'>
          <Hero />
        </Route>

      </Switch>
    </Router>
  </div>

  );
}

export default App;

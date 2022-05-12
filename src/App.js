//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sample from './pages/Sample/Sample';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <Router>
        <Navigation />

        <Switch>
          <Route path='/' exact component={Sample} />



        </Switch>

    </Router>
  );
}

export default App;

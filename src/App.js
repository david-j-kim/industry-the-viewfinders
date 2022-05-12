//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <Router>
        <Navigation />

        <Switch>
          <Route path='/' exact component={ProfileScreen} />



        </Switch>

    </Router>
  );
}

export default App;

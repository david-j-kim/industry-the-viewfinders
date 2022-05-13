//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import Navigation from './components/Navigation/Navigation';
import ProjectUpload from './pages/ProjectUpload/ProjectUpload'


function App() {
  return (
    <Router>
        <Navigation />

        <Switch>
          <Route path='/' exact component={ProfileScreen} />
          <Route path='/upload' component={ProjectUpload}/>



        </Switch>

    </Router>
  );
}

export default App;

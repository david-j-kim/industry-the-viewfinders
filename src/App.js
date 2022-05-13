//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import Navigation from './components/Navigation/Navigation';
import ProjectUpload from './pages/ProjectUpload/ProjectUpload';
import ProjectUploadDetails from './pages/ProjectUploadDetails/ProjectUploadDetails';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {
  return (
    <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={ProfileScreen} />
          <Route path='/upload' exact component={ProjectUpload}/>
          <Route path='/upload/details' component={ProjectUploadDetails}/>
          <Route path='/profile' component={ProfilePage}/>
        </Switch>
    </Router>
  );
}

export default App;

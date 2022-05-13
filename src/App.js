//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GalleryList from './pages/GalleryList/GalleryList';
import NavigationTop from './components/NavigationTop/NavigationTop';
import NavigationSide from './components/NavigationSide/NavigationSide';
import ProjectUpload from './pages/ProjectUpload/ProjectUpload'
import HomeScreen from './pages/HomeScreen/HomeScreen';
import ProjectUploadDetails from './pages/ProjectUploadDetails/ProjectUploadDetails';
import ProfilePage from './pages/ProfilePage/ProfilePage';


function App() {
  return (
    <Router>
        <NavigationTop />
        <div className="content">
          <NavigationSide />
          <Switch>
            <Redirect from="/" to="/home" exact/>
            <Route path='/home' exact component={HomeScreen} />
            <Route path='/discover' exact component={GalleryList} />
            <Route path='/upload' exact component={ProjectUpload}/>
            <Route path='/upload/details' exact component={ProjectUploadDetails}/>
            <Route path='/profile' exact component={ProfilePage}/>
          </Switch>
        </div>

    </Router>
  );
}

export default App;

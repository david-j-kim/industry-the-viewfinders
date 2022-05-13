//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryList from './pages/GalleryList/GalleryList';
import NavigationTop from './components/NavigationTop/NavigationTop';
import NavigationSide from './components/NavigationSide/NavigationSide';
import ProjectUpload from './pages/ProjectUpload/ProjectUpload'


function App() {
  return (
    <Router>
        <NavigationTop />

        <div className="content">
          <NavigationSide />

          <Switch>
            <Route path='/discover' exact component={GalleryList} />
            <Route path='/upload' exact component={ProjectUpload}/>

          </Switch>
        </div>

    </Router>
  );
}

export default App;

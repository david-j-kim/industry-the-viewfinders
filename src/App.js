//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryList from './pages/GalleryList/GalleryList';
import Navigation from './components/Navigation/Navigation';
import ProjectUpload from './pages/ProjectUpload/ProjectUpload'


function App() {
  return (
    <Router>
        <Navigation />

        <div> {/* put navbar to left */}
        <Switch>
          <Route path='/discover' exact component={GalleryList} />
          <Route path='/upload' component={ProjectUpload}/>



        </Switch>
        </div>

    </Router>
  );
}

export default App;

//global
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryList from './pages/GalleryList/GalleryList';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <Router>
        <Navigation />

        <div> {/* put navbar to left */}
        <Switch>
          <Route path='/discover' exact component={GalleryList} />



        </Switch>
        </div>

    </Router>
  );
}

export default App;

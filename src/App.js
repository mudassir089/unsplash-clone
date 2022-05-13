import 'antd/dist/antd.css';
import { Globalstyles } from './Globalstyles';
import Mainnavbar from './components/Mainnavbar';
import Home from './pages/Home';
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Wallpaper from './pages/Wallpaper';
import Fashion from './pages/fashion';
import Threed from './pages/threed';
import Foodanddrink from './pages/foodanddrink';
import History from './pages/History';
import Architecture from './pages/Architecture';
import Nature from './pages/Nature';
import Film from './pages/film';
import Textures from './pages/Textures';
import Street from './pages/Street';
import Experimental from './pages/Experimental';
import Interiors from './pages/Interiors';
import Arts from './pages/Arts';
import Animal from './pages/Animal';
import Travel from './pages/Travel';
import People from './pages/People';
import Search from './pages/Searcch';
function App() {

  return (
    <>
    <Router>
      <Globalstyles />
      <Mainnavbar />
      <Switch>
      <Route path={['/','/photos/:id']} exact  component={Home}/>
      <Route path={['/wallpaper','/photos/:id']} component={Wallpaper}/>
      <Route path={['/fashion','/photos/:id']} component={Fashion}/>
      <Route path={['/3d-Renders','/photos/:id']} component={Threed}/>
      <Route path={['/food-drink','/photos/:id']} component={Foodanddrink}/>
      <Route path={['/history','/photos/:id']} component={History}/>
      <Route path={['/architecture','/photos/:id']} component={Architecture}/>
      <Route path={['/nature','/photos/:id']} component={Nature}/>
      <Route path={['/film','/photos/:id']} component={Film}/>
      <Route path={['/textures-patterns','/photos/:id']} component={Textures}/>
      <Route path={['/street-photography','/photos/:id']} component={Street}/>
      <Route path={['/experimental','/photos/:id']} component={Experimental}/>
      <Route path={['/interiors','/photos/:id']} component={Interiors}/>
      <Route path={['/arts-culture','/photos/:id']} component={Arts}/>
      <Route path={['/animals','/photos/:id']} component={Animal}/>
      <Route path={['/travel','/photos/:id']} component={Travel}/>
      <Route path={['/people','/photos/:id']} component={People}/>
      <Route path={['/search/:slug']} component={Search}/>
      </Switch>

     </Router>
    </>
  );
}

export default App;

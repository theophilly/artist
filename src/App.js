import './index.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import HomeListings from './components/HomeListings';
import ExhibitionSection from './components/ExhibitionSection';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import ArchivePage from './pages/ArchivePage';
import ProfileSection from './components/ProfileSection';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewArt from './components/NewArt';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={AboutPage} path="/about" />
        <Route component={ArchivePage} path="/archive" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

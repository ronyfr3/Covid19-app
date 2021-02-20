import React from 'react'
import Header from './Header/Header'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Footer from './Footer/Footer';
import Articles from './Pages/Articles';
import Vaccine from './Pages/Vaccine';
import Prevention from './Pages/Prevention';
import Why from './Pages/Why';
import Home from './Home';
import User from './UserMail/User';
import BarItems from './Header/BarItems';


const App = () => {
  return (
    <Router>
      <Header/>
      <BarItems/>
      <User/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/articles' component={Articles}/>
        <Route exact path='/vaccine' component={Vaccine}/>
        <Route exact path='/prevention' component={Prevention}/>
        <Route exact path='/why' component={Why}/>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App

import React, { Component } from 'react';
import Navbar from './Componets/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Componets/Home'
import About from './Componets/About'
import Contact from './Componets/Contact'
import Post from './Componets/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
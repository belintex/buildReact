import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import './App.css';

function Home() {
  return <h2> Halaman Home </h2>
}

function ListView() {
  return (
    <div>
      <h2>Semua User</h2>
      <ol>
        <li> <Link to='user/kreatif'> Kreatif </Link> </li>
        <li> <Link to='user/cerdas'> Cerdas </Link> </li>
      </ol>
    </div>
  )
}

function DetailView({match}) {
  return <h3> Ini halaman {match.params.tes} </h3>
}

function NoMatch() {
  return <h3> 404, Halaman Tidak ditemukan </h3>
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/users'> User </Link> </li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/users' exact component={ListView} />
              <Route path='/user/:tes' exact component={DetailView} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

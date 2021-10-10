import React from 'react';
import './App.css';
import Final from './Final';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Liked from './pages/Liked';
import Createplaylist from './pages/createplaylist';
import Library from './pages/library';
import Search from './pages/search';
import Home from './pages/home';
import Backsign from './pages/backsign';
import Frontsign from './pages/frontsign';
import Login from './pages/login';
import Register from './pages/register';
import Grand from './pages/grand';


const App = () => {
    return ( 
        <div className = "App" >
        <BrowserRouter >
        <Switch >
        <Route path = { '/' }
        exact component = { Final }
        />
        <Route path = { '/Liked' }
        component = { Liked }/>
        <Route path = { '/Createplaylist' }
        component = { Createplaylist }/> 
        <Route path = { '/Library' }
        component = { Library }/>
         <Route path = { '/Search' }
        component = { Search }/>
         <Route path = { '/Home' }
        component = { Home }
        />
         <Route path = { '/backsign' }
        component = { Backsign }
        />
         <Route path = { '/frontsign' }
        component = { Frontsign }
        />
         <Route path = { '/Login' }
        component = { Login }
        />
         <Route path = { '/Register' }
        component = { Register }
        />
         <Route path = { '/Grand' }
        component = { Grand }
        />


        </Switch>  
        </BrowserRouter>

        </div>
    );
}

export default App;
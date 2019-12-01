//Core Libraries
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//stylesheets
import './Main.css';

//custom components
import { Home } from "./Home";
import { Music } from "./Music";
import { FantasyFootball } from "./FantasyFootball";
import { Calendar } from "./Calendar";

class Main extends React.Component {
  render() {
  	return (
    <div className="Main">
    	<div className="Main-header">
	      <BrowserRouter>
	      	<Switch>
	      		<Route path="/home" component={Home} />
	      		<Route path="/music" component={Music} />
	      		<Route path="/fantasyfootball" component={FantasyFootball} />
	      		<Route path="/calendar" component={Calendar} />
	      	</Switch>
	      </BrowserRouter>
        </div>
    </div>
  	);
  }
}

export default Main;
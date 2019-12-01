//Core Libraries
import React from 'react';
import { Route } from 'react-router-dom';

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
	      		<Route exact path="/" component={Home} />
	      		<Route path="/music" component={Music} />
	      		<Route path="/fantasyfootball" component={FantasyFootball} />
	      		<Route path="/calendar" component={Calendar} />
        </div>
    </div>
  	);
  }
}

export default Main;
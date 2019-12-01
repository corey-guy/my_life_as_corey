import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationList.css'

function NavigationList() { 

	return (
		<div>
				<nav>
					<li className="Nav-Item"><Link className="pure-menu-link" to="/">Home</Link></li>
					<li className="Nav-Item"><Link className="pure-menu-link" to="/music">Music</Link></li>
					<li className="Nav-Item"><Link className="pure-menu-link" to="/calendar">Calendar</Link></li>
					<li className="Nav-Item"><Link className="pure-menu-link" to="/fantasyfootball">Fantasy Football</Link></li>
				</nav>
		</div>
		);
}

export default NavigationList;
import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationList.css'

function NavigationList() { 

	return (
		<div>
					<ul id="navul" className="pure-menu pure-menu-horizontal">
						<li className="pure-menu-item"><Link className="pure-menu-link" to="/">Home</Link></li>
						<li className="pure-menu-item"><Link className="pure-menu-link" to="/music">Music</Link></li>
						<li className="pure-menu-item"><Link className="pure-menu-link" to="/calendar">Calendar</Link></li>
						<li className="pure-menu-item"><Link className="pure-menu-link" to="/fantasyfootball">Fantasy Football</Link></li>
					</ul> 
		</div>
		);
}

export default NavigationList;
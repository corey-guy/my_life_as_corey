import React from 'react';
import './Navigation.css'; 
import { toggleNavigation } from '../redux/actions';
import { connect } from 'react-redux';
import NavigationList from './NavigationList';

const Navigation = ({ toggleNavigation }) => {
	return(
		<div className='Navigation'>
			<header className='Navigation-header' 
					onClick={() => { toggleNavigation() }}>
					<div className="ham-slice"></div>
					<div className="ham-slice"></div>
					<div className="ham-slice"></div>
				<NavigationList />
			</header>
		</div>
	);
};

export default connect ( 
	null,
	{ toggleNavigation }
)(Navigation);
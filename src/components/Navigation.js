import React from 'react';
import './Navigation.css'; 
import { toggleNavigation } from '../redux/actions';
import { connect } from 'react-redux';

const Navigation = ({ toggleNavigation }) => {
	return(
		<div className='Navigation'>
			<header className='Navigation-header' 
					onClick={() => { toggleNavigation() }}>
				Hey
			</header>
		</div>
	);
};

export default connect ( 
	null,
	{ toggleNavigation }
)(Navigation);
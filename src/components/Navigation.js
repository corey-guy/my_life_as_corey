import React from 'react';
import './Navigation.css'; 
import { toggleNavigation } from '../redux/actions';
import { connect } from 'react-redux';
import NavigationList from './NavigationList';
import { getIsNavigationVisibile } from "../redux/selectors"

const Navigation = ({ isVisible, toggleNavigation }) => {
	return(
		<div className='Navigation'>
			<header className='Navigation-header' 
					onClick={() => { toggleNavigation() }}>
					<div className="ham-slice"></div>
					<div className="ham-slice"></div>
					<div className="ham-slice"></div>
			</header>
			{ isVisible ? 
						<NavigationList /> 
						: <div></div>} 
		</div>
	);
};

const mapStateToProps = state => {
	const isVisible = getIsNavigationVisibile(state);
	return { isVisible }
};

export default connect ( 
	mapStateToProps,
	{ toggleNavigation }
)(Navigation);
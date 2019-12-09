import React from 'react';
import './Navigation.css'; 
import { toggleNavigation } from '../redux/actions';
import { connect } from 'react-redux';
import NavigationList from './NavigationList';
import { getIsNavigationVisibile } from "../redux/selectors"
import hamIcon from '../images/ham-icon.png';

const Navigation = ({ isVisible, toggleNavigation }) => {
	return(
		<div className='Navigation'>
			<header className='Navigation-header' 
					onClick={() => { toggleNavigation() }}>
					<img src={hamIcon} height="25px" width="25px" alt="hamburger icon"/>
			</header>
			{ isVisible ? 
						<NavigationList /> 
						: ""} 
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
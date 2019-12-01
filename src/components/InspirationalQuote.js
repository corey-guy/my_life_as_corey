import React from 'react';
import './InspirationalQuote.css';

import { changeQuote } from '../redux/actions';
import { connect } from 'react-redux';
import { getCurrQuote } from "../redux/selectors"
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const InspirationalQuote = ( {changeQuote, currQuote } ) => {
	//implement a selector that gets one Quote by random
	//implement add quote
		return(
			<div className="InspirationalQuote">
				<h1 >Words of the World</h1>
				<ReactCSSTransitionReplace transitionName="carousel-swap" overflowHidden={false} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
					<blockquote class="brooks" key={currQuote} >{ currQuote }</blockquote>
				</ReactCSSTransitionReplace>
				<br/>
				<br/>
				<div class="flex">
				  <a href="#0" class="bttn" onClick={ () => { changeQuote() } } > Change Words of the World </a>
				</div>
			</div>
		);
};

const mapStateToProps = state => {
	const currQuote = getCurrQuote(state);
	return { currQuote }
};

export default connect ( 
	mapStateToProps,
	{ changeQuote }
)(InspirationalQuote);
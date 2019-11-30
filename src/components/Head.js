import React from 'react';
import Helmet from 'react-helmet';

const Head = ({ title } ) => {
	var defaultTitle = '🤖 Me';
	return(
		<Helmet>
	  		<title>{title ? title : defaultTitle}</title>
	  	</Helmet>
		);
}

export default Head;
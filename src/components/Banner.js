import React from 'react';
import './Banner.css'; 

//pull an image from display and use as banner
function Banner() {
	return(
		<div className='Banner'>
			<header className='Banner-header'>
				<img className='logo-image' src="https://i.ibb.co/v1BtfYb/Logo2.jpg" alt="Logo2" border="0"/>
				<div id="Guytext">Guyzone</div>
			</header>
		</div>
	);
}

export default Banner;
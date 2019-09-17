import React from 'react';

const style = {
	header: {
		color: 'white',
		paddingTop: '200px',


	}
}


class Header2 extends React.Component {



	render() {

		return (

			<div className="center" style={style.header}>
				<h1>Phillip Peterson</h1>
				<h3>Software Developer</h3>
			</div>
		  )
	}
}

export default Header2;
import React from 'react';

const style = {
	header: {
		color: 'white',
		paddingTop: '175px',
	},

	title: {
		fontSize: '60px'
	},

	subtitle: {
		fontSize: '35px'
	}
}


class Header2 extends React.Component {

	render() {

		return (
			<div className="center" style={style.header}>
				<h1 style={style.title}>Phillip Peterson</h1>
				<h3 style={style.subtitle}>Software Developer</h3>
			</div>
		  )
	}
}

export default Header2;
import React from 'react';
import logo from '../logo.svg';

import {Container, Row, Col, Button} from 'reactstrap';

const styles = {


	row: {
		textAlign: 'center'
	},

	logo: {
		width: 80
	}
};

class Header extends React.Component {

	render() {

		return (

			<header className="border-bottom">
				<Row className="bg-white pb-3" style={styles.row}>

					<Col xs={4} sm={4} md={4} />

					<Col md={4} >
						<Container >

							<img src={logo} alt="logo" className="logo" style={styles.logo} />

							
						</Container>

						<Container>
							<h2>Welcome to my website!</h2>
							<p>This is my website that I'll be using for my portfolio! There isn't much yet while I'll work on it but there'll be more to come </p>
							<Button color="primary" href={require('../resources/Resume.pdf')}>Take a look at my resume!</Button>
						</Container>
					</Col>

					<Col xs={4} sm={4} md={4} />

				</Row>
			</header>

		);
	}
}

export default Header;
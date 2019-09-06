import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioSlider from './components/PortfolioSlider';

const App = () => (
	<Fragment>
		
		<Header />

		<main className="pt-5">
		
			<Container className="pb-5">
				<Row className="pt-0 w-100 px-4 px-xl-0 position-relative">
				<Col xs={4} sm={4} md={4} />
				<Col md={5} className="pb-6 pb-md-0 mb-md-0 mx-md-0">
					<PortfolioSlider />
					
				</Col>
				<Col xs={4} sm={4} md={4} />
				</Row>

			</Container>
		</main>

		<Footer />
		
	</Fragment>
);

export default App;
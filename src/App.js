import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioSlider from './components/PortfolioSlider';
import Skills from './components/Skills';
import Header2 from './components/Header2';

const App = () => (
	<Fragment>
		
		<div className="parallax">
			<Header2 />
		</div>

		<main className="pt-5 center">
		
			<Container className="pb-5">
				<Row className="pt-0 px-4 px-xl-0 position-relative">
					<Col xs={4} sm={4} md={4} />
					<Col md={5} className="pb-6 pb-md-0 mb-md-0 mx-md-0">
						<PortfolioSlider />
					</Col>
					<Col xs={4} sm={4} md={4} />
				</Row>

			</Container>
			
		</main>
		<Skills />

		<Footer />
		
	</Fragment>
);

export default App;
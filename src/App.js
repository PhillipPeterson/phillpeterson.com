import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from './components/Footer';
import PortfolioSlider from './components/PortfolioSlider';
import Skills from './components/Skills';
import Header from './components/Header';
import PortfolioLayout from './components/PortfolioLayout';

const App = () => (
	<Fragment>
		
		<div className="parallax" id="par1">
			<Header />
		</div>

		<main className="pt-5 center">
		
			<Container className="pb-5">
				<Row className="px-4 position-relative">
					<Col xs={4} sm={4} md={4} />
					<Col md={4} className="pb-6">
						<PortfolioSlider />
					</Col>
					<Col xs={4} sm={4} md={4} />
				</Row>

			</Container>
			
		</main>
		<PortfolioLayout />
		<Skills />

		<div className="parallax" id="par2">
			<Footer />
		</div>
		
	</Fragment>
);

export default App;
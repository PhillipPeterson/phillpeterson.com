import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from './components/Footer';
import PortfolioSlider from './components/PortfolioSlider';
import Skills from './components/Skills';
import Header from './components/Header';
import PortfolioLayout from './components/PortfolioLayout';
import About from './components/About';
import SkillSlider from './components/SkillSlider';

const App = () => (
	<Fragment>
		
		<div className="parallax" id="par-header">
			<Header />
		</div>

		<Skills />

		<main className="pt-5 ">
		
			<Container className="pb-5">
				<Row className="px-4 position-relative">
					<Col md={6} className="pb-6" >
						<About />
					</Col>
					<Col md={6} className="pb-6">
						<SkillSlider />
					</Col>
				</Row>
			</Container>
			
		</main>
		
		<PortfolioLayout />

		<div className="parallax" id="par-footer">
			<Footer />
		</div>
		
	</Fragment>
);

export default App;
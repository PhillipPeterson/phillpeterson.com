import React from "react";
import { Row, Col, Container } from 'reactstrap';
import PortfolioCard from './Card';
const data = require('../resources/data.json');

class PortfolioLayout extends React.Component {
  render() {

	return (
		<div>

				
			<Container className="pb-5">
				<Row className="px-4 position-relative">
					<Col className="center pb-3" md={4} >
						<PortfolioCard data={data["0"]} />
					</Col>
					<Col className="center pb-3" md={4} >
						<PortfolioCard data={data["1"]} />
					</Col>
					<Col className="center pb-3" md={4} >
						<PortfolioCard data={data["2"]} />
					</Col>
				</Row>

			</Container>
				

		</div>
    );
  }
}

export default PortfolioLayout;

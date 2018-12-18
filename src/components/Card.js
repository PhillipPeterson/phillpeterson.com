import React, { Fragment } from 'react';

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


class PortfolioCard extends React.Component {

	render() {
		return (
			<Fragment>

				<Card style={{ marginBottom: 30 }}>
					<CardBody>
						<CardTitle className="h3 mb-3 pb-2 font-weight-bold border-bottom">{this.props.title}</CardTitle>
						<CardText className="text-secondary mb-4" style={{ }}>
							{this.props.text}
						</CardText>
					</CardBody>
				</Card>

			</Fragment>

		);
	}

}

export default PortfolioCard;
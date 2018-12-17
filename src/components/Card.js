import React, { Fragment } from 'react';

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


class PortfolioCard extends React.Component {

	render() {
		return (
			<Fragment>

				<Card style={{ marginBottom: 30 }}>
					<CardBody>
						<CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">{this.props.title}</CardTitle>
						<CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
							{this.props.text}
					</CardText>
					</CardBody>
				</Card>

			</Fragment>

		);
	}

}

export default PortfolioCard;
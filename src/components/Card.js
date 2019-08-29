import React, { Fragment } from 'react';

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


class PortfolioCard extends React.Component {

	render() {

		const {props} = this;
		const {title, text} = props.data;
		return (
			<Fragment>

				<Card style={{ marginBottom: 30 }}>
					<CardBody>
						<CardTitle className="h3 mb-3 pb-2 font-weight-bold border-bottom">{title}</CardTitle>
						<CardText className="text-secondary mb-4" style={{ }}>
							{text}
						</CardText>
					</CardBody>
				</Card>

			</Fragment>

		);
	}

}

export default PortfolioCard;
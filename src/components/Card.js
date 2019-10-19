import React from 'react';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

const cardStyle = {
	height: '350px',
}


class PortfolioCard extends React.Component {

	render() {

		const {props} = this;
		const {title, sub, text} = props.data;
		return (

				<Card style={cardStyle}>
					<CardContent>
						<CardHeader title={title} subheader={sub} className="h3 mb-3 pb-2 border-bottom" />
						<Typography className=" mb-4" style={{ }}>
							{text}
						</Typography>
					</CardContent>
				</Card>

		);
	}

}

export default PortfolioCard;
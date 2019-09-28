import React, { Fragment } from 'react';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

class PortfolioCard extends React.Component {

	render() {

		const {props} = this;
		const {title, sub, text} = props.data;
		return (
			<Fragment >

				<Card >

					

					<CardContent>
					<CardHeader title={title} subheader={sub} className="h3 mb-3 pb-2 font-weight-bold border-bottom" />
						<Typography className=" mb-4" style={{ }}>
							{text}
						</Typography>
					</CardContent>
				</Card>

			</Fragment>

		);
	}

}

export default PortfolioCard;
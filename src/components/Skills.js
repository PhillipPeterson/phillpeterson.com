import React, { Fragment } from 'react';

import { Row, Col } from 'reactstrap';

class Skills extends React.Component {

	render() {

        return (

            <div className="pt-2 border-top">
				<Row className="center">

					<Col xs={4} sm={4} md={4} />

					<Col md={4} >
						<h2 className="font-weight-bold">Skills</h2>
                        <p>This will be the spot where I put my skillset I have developed when I get around to it soon enough!</p>
					</Col>

					<Col xs={4} sm={4} md={4} />

				</Row>
                </div>


		);
	}

}

export default Skills;
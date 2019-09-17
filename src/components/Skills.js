import React, { Fragment } from 'react';

import { Row, Col, Container } from 'reactstrap';

class Skills extends React.Component {

	render() {

        return (

            <div className="pt-2 border-top">
                <Container>
                    <Row className="center">

                        <Col xs={4} sm={4} md={4}>
                            <p>I'll probably have some stuff over here too!</p>
                        </Col>

                        <Col md={4} >
                            <h2 className="font-weight-bold">Skills</h2>
                            <p>This will be the spot where I put my skillset I have developed when I get around to it soon enough!</p>
                        </Col>

                        <Col xs={4} sm={4} md={4}>
                            <p>And over here!</p>                        
                        </Col>

                    </Row>
                </Container>
            </div>


		);
	}

}

export default Skills;
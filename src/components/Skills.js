import React from 'react';

import { Row, Col, Container } from 'reactstrap';

import AppsOutlined from '@material-ui/icons/AppsOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import DevicesIcon from '@material-ui/icons/Devices';


const styles = {

    icon: {
        color: 'white',
        width: 50,
        height: 50
    }

}

class Skills extends React.Component {

    

	render() {

        return (

            <div className="pb-5 pt-5 border-top">
                <Container>
                    <Row around="md">

                        <Col className="center" md={4}>
                            <span className="span-icon">
                                <DevicesIcon style={styles.icon}/>
                            </span>
                            <h2>Responsive Design</h2>
                            <p>I'll probably have some stuff over here too!</p>
                        </Col>

                        <Col className="center" md={4} >
                            <span className="span-icon">
                                <LanguageIcon style={styles.icon}/>
                            </span>
                            <h2 className="font-weight-bold">Skills</h2>
                            <p>This will be the spot where I put my skillset I have developed when I get around to it soon enough!</p>
                        </Col>

                        <Col className="center"md={4}>
                            <span className="span-icon">
                                <AppsOutlined style={styles.icon}/>
                            </span>
                            <h2>Software</h2>
                            <p>And over here!</p>                        
                        </Col>

                    </Row>
                </Container>
            </div>


		);
	}

}

export default Skills;
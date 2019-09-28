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
                            <p>I have expereince with both desktop and mobile software applications
                                and will help you design an app that utilizes both scalabiltiy and resusability.
                            </p>
                        </Col>

                        <Col className="center" md={4} >
                            <span className="span-icon">
                                <LanguageIcon style={styles.icon}/>
                            </span>
                            <h2>Skills</h2>
                            <p>
                                I develop with Javascript, Java, Python, and SQL.<br />
                                I have experience with Angular, React, and Ionic.<br />
                                Let me design your Salesforce platform.
                            </p>
                        </Col>

                        <Col className="center" md={4}>
                            <span className="span-icon">
                                <AppsOutlined style={styles.icon}/>
                            </span>
                            <h2>Software</h2>
                            <p>I can help you design and build production quality software while 
                                integrating testing and continuous integration.</p>                        
                        </Col>

                    </Row>
                </Container>
            </div>


		);
	}

}

export default Skills;
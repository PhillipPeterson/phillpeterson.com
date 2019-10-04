import React from 'react';

import { Row, Col, Container } from 'reactstrap';

import AppsOutlined from '@material-ui/icons/AppsOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import DevicesIcon from '@material-ui/icons/Devices';
import Button from '@material-ui/core/Button';


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
                            <p>I have experience with both desktop and mobile software applications
                                and will help you design an app that utilizes both scalabiltiy and resusability.
                            </p>
                        </Col>

                        <Col className="center" md={4} >
                            <span className="span-icon">
                                <LanguageIcon style={styles.icon}/>
                            </span>
                            <h2>Skills</h2>
                            <p>
                                This page was designed using Reactjs! I can also design a website using Wordpress!
                            </p>
                            <Button color="primary" variant="contained" href='http://www.phillpeterson.com/wordpress/'>Take a look here!</Button>

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
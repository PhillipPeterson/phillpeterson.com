import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Container, Button, Row } from 'reactstrap';


const style = {

    email: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 15,
        backgroundColor: '#ff4343',
        boxShadow: "5px 5px 20px black"
    },

    linkedin: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 15,
        backgroundColor: '#0077B5',
        boxShadow: "5px 5px 20px black"
    },

    github: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 15,
        backgroundColor: '#222',
        boxShadow: "5px 5px 20px black"
    }

};

class Footer extends React.Component {



    onClick(link) {
        if (link === 'email') {
            window.open('mailto:phillippeterson137@gmail.com?Subject=Response%20From%20Portfolio%20Site');
        } else if (link === 'linkedin') {
            window.open('https://www.linkedin.com/in/phillip-peterson-ba6820175/');
        } else if (link === 'git') {
            window.open('https://www.github.com/phillippeterson');
        }
    }

    render() {
        return (
            <Container className="border-top">
            <Row className="pt-4">
                <span className="pb-2 h2 border-bottom"><b>Contact</b></span>
                
            </Row>
            <Row>
                <p><b>Email</b>: phillippeterson137@gmail.com</p>
                <div>
                    <Button style={style.email} onClick={() => this.onClick('email')}>
                        <FaEnvelope style={{ width: 35, height: 35 }} />
                    </Button>
                    <Button style={style.linkedin} onClick={() => this.onClick('linkedin')}>
                        <FaLinkedin style={{ width: 35, height: 35 }} />
                    </Button>
                    <Button style={style.github} onClick={() => this.onClick('git')}>
                        <FaGithub style={{ width: 45, height: 45 }} />
                    </Button>
                </div>
            </Row>
            </Container>
        );
    }
}

export default Footer;
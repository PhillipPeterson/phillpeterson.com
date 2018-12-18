import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Button, Row } from 'reactstrap';


const style = {

    email: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        marginRight: 15,
        backgroundColor: '#ff4343',
        boxShadow: "5px 5px 20px black"
    },

    linkedin: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        marginRight: 15,
        backgroundColor: '#0077B5',
        boxShadow: "5px 5px 20px black"
    },

    github: {
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        marginRight: 15,
        backgroundColor: '#222',
        boxShadow: "5px 5px 20px black"
    }

};

class Footer extends React.Component {



    onClick(link) {
        if (link === 'email') {
            window.open('mailto:phillip1.peterson@umontana.edu?Subject=Response%20From%20Portfolio%20Site');
        } else if (link === 'linkedin') {
            window.open('https://www.linkedin.com/in/phillip-peterson-ba6820175/');
        } else if (link === 'git') {
            window.open('https://www.github.com/phillippeterson');
        }
    }

    render() {
        return (
            <Row className="pt-4 border-top">
                <span className="pb-4 h2 text-dark border-bottom"><b>Contact</b></span>
                <p><b>Email</b>: phillip1.peterson@umontana.edu | <b>Phone</b>: (406)-890-9262</p>
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
        );
    }
}

export default Footer;
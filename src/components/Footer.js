import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Button, Row } from 'reactstrap';


class Footer extends React.Component {

    onContactButtonClick(link) {
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
            <Row className="border-top">
                <span className="pb-4 h2 text-dark border-bottom">Contact</span>
                <p><b>Email</b>: phillip1.peterson@umontana.edu | <b>Phone</b>: (406)-890-9262</p>
                <div>
                    <Button style={{marginRight:15,width:75,height:75,borderRadius: 50,backgroundColor: "#ff4343", }} onClick={() => this.onContactButtonClick('email')}>
                        <FaEnvelope style={{width:35,height:35}} />
                    </Button>
                    <Button style={{marginRight:15, width:75,height:75,borderRadius: 50,backgroundColor:"#0077B5"}} onClick={() => this.onContactButtonClick('linkedin')}>
                        <FaLinkedin style={{width:35,height:35}} />
                    </Button>
                    <Button style={{width:75,height:75,borderRadius: 50,borderWidth:0,backgroundColor: "whitesmoke",color:"black"}} onClick={() => this.onContactButtonClick('git')}>
                        <FaGithub style={{ width:45,height:45}} />
                    </Button>
                </div>
            </Row>
        );
    }
}

export default Footer;
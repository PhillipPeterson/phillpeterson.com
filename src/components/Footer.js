import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
                <span className="d-block pb-4 h2 text-dark border-bottom border-gray">Contact</span>
                <p><b>Email</b>: phillip1.peterson@umontana.edu | <b>Phone</b>: (406)-890-9262</p>
                <div>
                    <Button onClick={() => this.onContactButtonClick('email')}>
                        <MdMail />
                    </Button>
                    <Button onClick={() => this.onContactButtonClick('linkedin')}>
                        <FaLinkedin />
                    </Button>
                    <Button onClick={() => this.onContactButtonClick('git')}>
                        <FaGithub />
                    </Button>
                </div>
            </Row>
        );
    }
}

export default Footer;
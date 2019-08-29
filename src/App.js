import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const App = () => (
  <Fragment className="xs-auto mx-auto">
  <Header />

    
    <main className="pt-5">
    
      <Container className="px-0">
        <Row className="pt-0 w-100 px-4 px-xl-0 position-relative">
          <Col xs={4} sm={4} md={4} />
          <Col md={5} className="pb-5 mb-5 pb-md-0 mb-md-0  mx-md-0">
            <Portfolio />
            <Footer />
          </Col>
          <Col xs={4} sm={4} md={4} />
        </Row>
      </Container>
    </main>
    
  </Fragment>
);

export default App;
import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => (
  <Fragment>
  
    <Header />
    
    <main className="my-5 py-5">
      <Container className="px-0">
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
          <Col xs={4} sm={4} md={4} />
          <Col xs={4} md={5} className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <Card />
            <Footer />
          </Col>
          <Col xs={4} sm={4} md={4} />
        </Row>
      </Container>
    </main>
    
  </Fragment>
);

export default App;
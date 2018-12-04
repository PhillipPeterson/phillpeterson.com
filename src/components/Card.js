import React, { Fragment } from 'react';

import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PortfolioCard = () => (
  <Fragment>
    
    <Card>
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Best Site Ever!</CardTitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>
          Hello! Welcome to my personal website! As you can see there's not much here yet 
          but it will eventually become a site for hosting my own portfolio and resume! 
        </CardText>
      </CardBody>
    </Card>
    
  </Fragment>
);

export default PortfolioCard;
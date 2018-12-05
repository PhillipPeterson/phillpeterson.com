import React, { Fragment } from 'react';
import PortfolioCard from './card'


class Portfolio extends React.Component {

    render() {
        return (
            <Fragment>
                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />
            </Fragment>
        );
    }

}

export default Portfolio;
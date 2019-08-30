import React, { Fragment } from 'react';
import PortfolioCard from './Card'

const data = require('../resources/data.json');

class Portfolio extends React.Component {

    render() {
        return (
            <Fragment>
                <PortfolioCard data={data["0"]} />
                <PortfolioCard data={data["1"]}/>
                <PortfolioCard data={data["2"]}/>
            </Fragment>
        );
    }

}

export default Portfolio;
import React, { Fragment } from 'react';
import PortfolioCard from './card'


class Portfolio extends React.Component {

    render() {
        return (
            <Fragment>
                <PortfolioCard title='Card 1' text='This is card 1' />
                <PortfolioCard title='Card 2' text='This is card 2'/>
                <PortfolioCard title='Card 3' text='This is card 3'/>
            </Fragment>
        );
    }

}

export default Portfolio;
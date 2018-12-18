import React, { Fragment } from 'react';
import PortfolioCard from './card'


class Portfolio extends React.Component {

    render() {
        return (
            <Fragment>
                <PortfolioCard title='GatherBoard Mobile' text='This is card 1' />
                <PortfolioCard title='Recipe Book' text='This is card 2'/>
                <PortfolioCard title="Bustin' Out" text='This is card 3'/>
            </Fragment>
        );
    }

}

export default Portfolio;
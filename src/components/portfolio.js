import React, { Fragment } from 'react';
import PortfolioCard from './card'


class Portfolio extends React.Component {

    render() {
        return (
            <Fragment>
                <PortfolioCard title='GatherBoard Mobile' 
                    text="Gatherboard is an event sharing platform. This app was developed 
                    using the ionic framework to complement the website and make access 
                    easier for those on the go" />
                <PortfolioCard title='Recipe Book' text="Recipe book is a program developed in java
                    as a way to keep track of your recipes. It allows you to create recipes with
                    portions and instructions so you can know how to make them just like you want!"/>
                <PortfolioCard title="Bustin' Out" text="Bustin' Out was a partially developed game
                    2D platformer using C#. The premise is that Megaman was a renegade cop who got
                    arrested for going off the wall and now finds himself in prison where he must
                    figure out how to make it the roof to make his great escape."/>
            </Fragment>
        );
    }

}

export default Portfolio;
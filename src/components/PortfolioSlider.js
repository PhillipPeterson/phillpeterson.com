import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioCard from './Card';
const data = require('../resources/data.json');

class PortfolioSlider extends React.Component {
  render() {
    var settings = {
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 7000
    };
	return (
		<div>
			<Slider {...settings}>
				
				<div className="mt-1 pl-2 pr-2">
					<PortfolioCard data={data["0"]} />
				</div>

				<div className="mt-1 pl-2 pr-2">
					<PortfolioCard data={data["1"]}/>
				</div>

				<div className="mt-1 pl-2 pr-2"> 
					<PortfolioCard data={data["2"]}/>
				</div>
				
			</Slider>
		</div>
    );
  }
}

export default PortfolioSlider;

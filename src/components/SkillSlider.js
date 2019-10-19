import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SkillSlider extends React.Component {
  render() {
    const settings = {
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 7000
    };
	return (
		<div>
            <h2>Skills</h2>
			<Slider {...settings}>
				
				<div className="mt-1 pl-2 pr-2">
					<h4 className="font-weight-bold" >Front End</h4><hr />
                    <p>HTML, CSS, JavaScript, Typescript, Bootstrap</p>
                    <p>jQuery, Node, Angular, React, Ionic, Wordpress</p>
				</div>

				<div className="mt-1 pl-2 pr-2">
                <h4 className="font-weight-bold">Back End/Scripting</h4><hr />
                    <p>Java, C#, SQL, Python, Firebase</p>
				</div>

                <div className="mt-1 pl-2 pr-2">
                <h4 className="font-weight-bold">Testing/CI</h4><hr />
                    <p>Travis CI, Mocha, PyUnit</p>
				</div>

				<div className="mt-1 pl-2 pr-2"> 
                <h4 className="font-weight-bold">Misc</h4><hr />
                    <p>Netbeans, VSCode, Android Studio, Git, MySQL, Salesforce</p>
				</div>
				
			</Slider>
		</div>
    );
  }
}

export default SkillSlider;

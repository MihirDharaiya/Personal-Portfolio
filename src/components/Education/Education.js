import north from "../../assets/img/Northeastern.png";
import indus from "../../assets/img/logo.png";
import meter3 from "../../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Circle } from 'rc-progress';
import TransparentCard from "../TransparentCard/TransparentCard";
import globe from "../../assets/img/Globe.svg";

import '../Education/Education.css';

export const Education = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="education" id="educations">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="education-bx wow zoomIn">
                            <h2>Education</h2>
                            <div className="direction">
                                <TransparentCard
                                    image={north}
                                    title={"Northeastern University"}
                                    course={"Master of Professional Studies in Analytics"}
                                    grad={"Graduation: 2025"}
                                    cgpa={"CGPA: 3.88"}
                                />
                                <TransparentCard
                                    image={indus}
                                    title={"Indus University"}
                                    course={"B.Technology in Computer Science"}
                                    grad={"Graduation: 2023"}
                                    cgpa={"CGPA: 9.80"}
                                />
                            </div>

                            {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme education-slider">
                                <div className="item">
                                    <img src={north} alt="Image" />
                                    <h5>Northeastern University</h5>
                                    <h6>Master of Professional Studies in Analytics</h6>
                                    <h6>Graduation: 2025</h6>
                                </div>
                                <div className="item">
                                    <img src={indus} alt="Image" />
                                    <h5>Indus University</h5>
                                    <h6>Bachelor of Technology in Computer Science</h6>
                                    <h6>Graduation: 2023</h6>
                                    <h6>CGPA: 9.80</h6>
                                </div>
                            </Carousel> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="globe">
                <img className={"image-profile"} src={globe} alt="Contact Us" />
            </div>
        </section>
    )
}
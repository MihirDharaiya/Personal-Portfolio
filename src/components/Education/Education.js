import north from "../../assets/img/Northeastern.png";
import indus from "../../assets/img/indus.png";
import 'react-multi-carousel/lib/styles.css';
import TransparentCard from "../TransparentCard/TransparentCard";
import globe from "../../assets/img/Globe2.svg";

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
                        <h2>Education</h2>
                        <div className="education-bx wow zoomIn">
                            <div className="direction">
                                <TransparentCard
                                    image={north}
                                    title={"Northeastern University"}
                                    course={"Master of Professional Studies in Analytics"}

                                    grad={"Graduation: 2025"}
                                    cgpa={"CGPA: 3.88"}
                                />
                                <div style={{ borderLeft: "2px solid #000", height: "100%", margin: "0 10px", opacity: 0.5 }}></div>
                                <TransparentCard
                                    image={indus}
                                    title={"Indus University"}
                                    course={"B.Technology in Computer Science"}

                                    grad={"Graduation: 2023"}
                                    cgpa={"CGPA: 9.80"}
                                />
                            </div>
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
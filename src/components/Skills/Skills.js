import rlang from "../../assets/img/R.svg";
import powerbi from "../../assets/img/PowerBI.svg";
import python from "../../assets/img/python.svg";
import tableau from "../../assets/img/tableau.svg";
import excel from "../../assets/img/excel.svg";
import xd from "../../assets/img/xd.svg";
import illustrator from "../../assets/img/illustrator.svg";
import DataVisualization from "../../assets/img/DataVisualization.svg";
import DataExploration from "../../assets/img/DataExploration.svg";
import database from "../../assets/img/database.svg";
import art from "../../assets/img/Art.svg";
import figma from "../../assets/img/figma2.svg";
import react from "../../assets/img/react.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"
import { Circle } from 'rc-progress';
import '../Skills/Skills.css'
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
    const customTransition = 'transform 300ms ease-in-out'; // Customize the transition property
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
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>What Skills Do I Have</h2>
                            <Carousel responsive={responsive} infinite={true} arrows={true} customTransition={customTransition} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={tableau} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Tableau</h5>
                                </div>
                                <div className="item">
                                    <img src={powerbi} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Power BI</h5>
                                </div>
                                <div className="item">
                                    <img src={rlang} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>R Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={python} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={illustrator} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Adobe Illustrator</h5>
                                </div>
                                <div className="item">
                                    <img src={xd} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Adobe XD</h5>
                                </div>
                                <div className="item">
                                    <img src={art} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Data Modeling</h5>
                                </div>
                                <div className="item">
                                    <img src={database} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={excel} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Microsoft Excel</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} style={{ height: 180, width: 140 }} alt="Image" />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={react} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>React Native</h5>
                                </div>
                                <div className="item">
                                    <img src={DataExploration} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Data Exploration</h5>
                                </div>
                                <div className="item">
                                    <img src={DataVisualization} style={{ height: 180, width: 180 }} alt="Image" />
                                    <h5>Data Visualization</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
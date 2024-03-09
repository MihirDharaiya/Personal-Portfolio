import { Col } from "react-bootstrap";
import { useState } from "react";
import { Popper } from '@mui/base/Popper';
import '../components/Projects/Projects.css';
export const ProjectCard = ({ title, description, imgUrl, popper }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return (
        <Col size={12} sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div
                    onClick={handleClick}
                    className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <section>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <p>{popper}</p>
                    </Popper>
                </section>
            </div>
        </Col>
    )
}
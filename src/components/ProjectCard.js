import { Col } from "react-bootstrap";
import { useCollapse } from 'react-collapsed'
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <Col size={12} sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div
                    {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })}
                    className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <section {...getCollapseProps()}>Collapsed content 🙈</section>
            </div>
        </Col>
    )
}
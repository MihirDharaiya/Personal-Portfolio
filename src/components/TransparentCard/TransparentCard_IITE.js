import React from 'react';
import './TransparentCard_IITE.css'; // Import the CSS file for styling

const TransparentCard_IITE = ({ image, title, course, grad, cgpa }) => {
    return (
        <div className="transparent-card-2">
            <h5>{grad}</h5>
            <img src={image} alt='/' />
            <h3>{title}</h3>
            <h5>{course}</h5>
            <h6>{cgpa}</h6>
        </div>
    );
};

export default TransparentCard_IITE;

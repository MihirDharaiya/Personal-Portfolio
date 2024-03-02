import React from 'react';
import './TransparentCard.css'; // Import the CSS file for styling

const TransparentCard = ({ image, title, course, grad, cgpa }) => {
    return (
        <div className="transparent-card">
            <h5>{grad}</h5>
            <img src={image} alt='/' />
            <h3>{title}</h3>
            <h5>{course}</h5>
            <h6>{cgpa}</h6>
        </div>
    );
};

export default TransparentCard;

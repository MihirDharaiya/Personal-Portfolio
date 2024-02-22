import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgressBar = ({ percentage }) => {
    return (
        <div style={{ width: '100px', margin: 'auto' }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    textColor: '#fff',
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    trailColor: '#d6d6d6',
                })}
            />
        </div>
    );
};

export default function App() {
    const progressPercentage = 50; // Set your desired percentage here

    return (
        <div>
            <h1>Circular Progress Bar Example</h1>
            <CircularProgressBar percentage={progressPercentage} />
        </div>
    );
}

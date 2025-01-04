import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Time = () => {
    const [laTime, setLaTime] = useState('');
    const [tyoTime, setTyoTime] = useState('');

    useEffect(() => {
        const updateTimes = () => {
            const currentLaTime = moment.tz("America/Los_Angeles").format("HH:mm:ss");
            const currentTyoTime = moment.tz("Asia/Tokyo").format("HH:mm:ss");

            setLaTime(`LA  ${currentLaTime}`);
            setTyoTime(`TYO  ${currentTyoTime}`);
        };

        // Update time immediately
        updateTimes();

        // Update the times every second
        const interval = setInterval(updateTimes, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-poppins text-left text-xs">
            <p>{laTime}</p>
            <p>{tyoTime}</p>
        </div>
    );
};

export default Time;

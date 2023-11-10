import React, { useState, useEffect } from 'react';

const images = [
    './img/1.avif',
    './img/2.jpg',
    './img/3.jpg',
];

const Diapo = () => {
    const [interval, setIntervl] = useState(2);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval * 1000);
        return () => clearInterval(timer);
    }, [interval]);

    const handleIntervalChange = (e) => {
        setIntervl(e.target.value);
    };

    return (
        <div>[]
            <h2>Diaporama</h2>
            <div>
                <img src={images[index]} />
            </div>
            <p>
                Interval :
                <input type="number" value={interval} onChange={handleIntervalChange} /> seconde
            </p>
        </div>
    );
};

export default Diapo;

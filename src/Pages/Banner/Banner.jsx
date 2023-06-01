import React, { useEffect, useState } from 'react';
import banner1 from '../../images/1.jpeg';
import banner2 from '../../images/2.jpeg';
import banner3 from '../../images/3.jpeg';

const Slider = () => {
    const images = [banner1, banner2, banner3];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 20000); // Slide change interval (20 seconds)

        return () => clearInterval(intervalId);
    }, [images.length]);

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <div className="relative w-full h-[500px]">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;

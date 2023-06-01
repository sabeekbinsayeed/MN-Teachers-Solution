import React, { useState } from 'react';
import SC_C1 from '../../images/SC_C1.JPG';
import SC_C2 from '../../images/SC_C2.JPG';
import SC_C3 from '../../images/SC_C3.JPG';
import SC_C4 from '../../images/SC_C4.JPG';
import SC_C5 from '../../images/SC_C5.JPG';
import SC_M1 from '../../images/SC_M1.JPG';
import SC_M2 from '../../images/SC_M2.JPG';

const ScienceSyllabusButton = () => {

    // const [copied, setCopied] = useState(false);

    // const handleCopy = () => {
    //     const paragraphText = 'This is the text you want to copy';
    //     navigator.clipboard.writeText(paragraphText);
    //     setCopied(true);
    // };



    const [selectedImages, setSelectedImages] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        let imagesToLoad = null;

        if (buttonNumber === 1) {
            imagesToLoad = SC_C1;
        } else if (buttonNumber === 2) {
            imagesToLoad = SC_C2;
        } else if (buttonNumber === 3) {
            imagesToLoad = [SC_C3];
        } else if (buttonNumber === 4) {
            imagesToLoad = [SC_C4];
        } else if (buttonNumber === 5) {
            imagesToLoad = [SC_C5];
        } else if (buttonNumber === 6) {
            imagesToLoad = [SC_M1];
        } else if (buttonNumber === 7) {
            imagesToLoad = [SC_M2];
        }

        setSelectedImages(imagesToLoad);
    };

    return (
        <div className="flex flex-col items-center mt-6 ">
            <h1 className='text-2xl text-center mb-6 font-bold'>Science and ICT Syllabus</h1>
            <div className="flex flex-wrap justify-center">
                <button className="btn btn-success me-3" onClick={() => handleButtonClick(1)}>
                    C1
                </button>
                <button className="btn btn-success me-3" onClick={() => handleButtonClick(2)}>
                    C2
                </button>
                <button className="btn btn-success me-3" onClick={() => handleButtonClick(3)}>
                    C3
                </button>
                <button className="btn btn-success me-3" onClick={() => handleButtonClick(4)}>
                    C4
                </button>
                <button className="btn btn-success me-3" onClick={() => handleButtonClick(5)}>
                    C5
                </button>
                <button className="btn btn-success me-3" onClick={() => handleButtonClick(6)}>
                    M1
                </button>
                <button className="btn btn-success" onClick={() => handleButtonClick(7)}>
                    M2
                </button>
            </div>
            {selectedImages && (
                <div className="flex justify-center mt-4">
                    {Array.isArray(selectedImages) ? (
                        selectedImages.map((imageName) => (
                            <img key={imageName} src={imageName} alt="Selected Image" />
                        ))
                    ) : (
                        <img className="" src={selectedImages} alt="Selected Image" />
                    )}
                </div>
            )}

            {/* <div>
                <p>
                    This is a paragraph that contains some text. Click the copy icon to copy the text to your clipboard.
                </p>
                <button onClick={handleCopy} className="copy-button">
                    Copy
                </button>
                {copied && <p>Text copied to clipboard!</p>}
            </div> */}

        </div>
    );
};

export default ScienceSyllabusButton;

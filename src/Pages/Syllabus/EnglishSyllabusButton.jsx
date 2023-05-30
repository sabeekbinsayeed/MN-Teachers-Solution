import React, { useState } from 'react';
import E_C1_1 from '../../images/English_C1_1.JPG';
import E_C1_2 from '../../images/English_C1_2.JPG';
import E_C2_1 from '../../images/English_C2_1.JPG';
// import E_C2_2 from '../../images/English_C2_2.JPG';
import E_C3_1 from '../../images/English_C3_1.JPG';
import E_C3_2 from '../../images/English_C3_2.JPG';
import E_C4_1 from '../../images/English_C4_1.JPG';
import E_C4_2 from '../../images/English_C4_2.JPG';
import E_C5_1 from '../../images/English_C5_1.JPG';
import E_C5_2 from '../../images/English_C5_2.JPG';
import E_M1_1 from '../../images/English_M1_1.JPG';
import E_M1_2 from '../../images/English_M1_2.JPG';
import E_M2_1 from '../../images/English_M2_1.JPG';
import E_M2_2 from '../../images/English_M2_2.JPG';


const EnglishSyllabusButton = () => {

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
            imagesToLoad = [E_C1_1, E_C1_2];
        } else if (buttonNumber === 2) {
            imagesToLoad = [E_C2_1];
        } else if (buttonNumber === 3) {
            imagesToLoad = [E_C3_1, E_C3_2];
        } else if (buttonNumber === 4) {
            imagesToLoad = [E_C4_1, E_C4_2];
        } else if (buttonNumber === 5) {
            imagesToLoad = [E_C5_1, E_C5_2];
        } else if (buttonNumber === 6) {
            imagesToLoad = [E_M1_1, E_M1_2];
        } else if (buttonNumber === 7) {
            imagesToLoad = [E_M2_1, E_M2_2];
        }

        setSelectedImages(imagesToLoad);
    };

    return (
        <div className="flex flex-col items-center mt-12">
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
                <div className="flex flex-col items-center mt-4">
                    {Array.isArray(selectedImages) ? (
                        selectedImages.map((imageName) => (
                            <div key={imageName} className="mb-4">
                                <img src={imageName} alt="Selected Image" />
                                <br />
                            </div>
                        ))
                    ) : (
                        <p className="">hello</p>
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

export default EnglishSyllabusButton;


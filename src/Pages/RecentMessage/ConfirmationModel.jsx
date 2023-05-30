import React from 'react';

const ConfirmationModel = ({ title, message, modalData, successAction, successButtonName, closeModal }) => {
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">

                        <label onClick={() => successAction(modalData)} htmlFor="my-modal" className="btn">{successButtonName}</label>
                        <button className='btn btn-outline' onClick={closeModal}>cancel</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

// export default ConfirmationModal;
export default ConfirmationModel; 
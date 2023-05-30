import React from 'react';

const Link = ({ link }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={link.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{link.name}</h2>
                <p>{link.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Link;
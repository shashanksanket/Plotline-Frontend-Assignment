import React, { } from 'react';
import './index.css';



const Button = ({ text, data }) => {
    return (
        <>
            <div className="button-container">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <button className="button tooltip">{text}</button>
                    <img className='arrow' style={{ width: "20px", height: "10px" }} src="/assets/arrow.svg" alt="arrow" />
                    <div
                        className="tooltip-content"
                        style={{ color: data.textcolor, fontSize: data.textsize, padding: data.padding, backgroundColor: data.bgcolour, borderRadius: data.cornerradius, width: data.tooltipwidth }}>
                        {data.tooltiptext || "Your Text Here"}
                        <div style={{display:"block"}}>
                            {data.imageFile && (
                                <img
                                    src={data.imageFile}
                                    alt="Uploaded"
                                    style={{ maxWidth: '10%', maxHeight: '10%' }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Button;



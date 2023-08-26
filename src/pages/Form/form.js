import React, { useState, useEffect } from 'react';
import './form.css';
import Screen from '../screen/screen'

const Form = () => {
    const [selectedButton, setSelectedButton] = useState('Button 1');
    const [tooltiptext, setTooltipText] = useState('');
    const [textsize, setTextSize] = useState('');
    const [padding, setPadding] = useState('');
    const [textcolour, setTextColour] = useState('');
    const [bgcolour, setBgColour] = useState('');
    const [cornerradius, setCornerRadius] = useState('');
    const [tooltipwidth, setTooltipWidth] = useState('');
    const [arrowwidth, setArrowWidth] = useState('');
    const [arrowheight, setArrowHeight] = useState('');
    const [count, setCount] = useState('')
    const [imageFile, setImageFile] = useState(null);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(selectedButton));
        setTooltipText(storedData?.tooltiptext || 'Your Text Here');
        setTextSize(storedData?.textsize || '10px');
        setPadding(storedData?.padding || '5px');
        setTextColour(storedData?.textcolour || 'white');
        setBgColour(storedData?.bgcolour || 'black');
        setCornerRadius(storedData?.cornerradius || '5%');
        setTooltipWidth(storedData?.tooltipwidth || 'max-content');
        setArrowWidth(storedData?.arrowwidth || '20px');
        setArrowHeight(storedData?.arrowheight || '22px');
        setImageFile(storedData?.imageFile || null);
    }, [selectedButton]);
    const handleInputChange = (event, fieldName, stateUpdater) => {
        setCount(count + 1)
        stateUpdater(event.target.value);
        const updatedData = {
            ...JSON.parse(localStorage.getItem(selectedButton)),
            [fieldName]: event.target.value
        };
        localStorage.setItem(selectedButton, JSON.stringify(updatedData));
    };
    const handleImageUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setImageFile(uploadedFile);

        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target.result;
            const updatedData = {
                ...JSON.parse(localStorage.getItem(selectedButton)),
                imageFile: imageData,
            };
            localStorage.setItem(selectedButton, JSON.stringify(updatedData));
        };
        reader.readAsDataURL(uploadedFile);
        setCount(count + 1);
    };





    return (
        <>
            <div className='form'>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="targetElement">Target Element</label>
                        <select value={selectedButton} onChange={(e) => setSelectedButton(e.target.value)}>
                            <option value="Button 1">Button 1</option>
                            <option value="Button 2">Button 2</option>
                            <option value="Button 3">Button 3</option>
                            <option value="Button 4">Button 4</option>
                            <option value="Button 5">Button 5</option>
                        </select>
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="tooltipText">Tooltip text</label>
                        <input id="tooltipTextInput" value={tooltiptext} onChange={(e) => handleInputChange(e, 'tooltiptext', setTooltipText)} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="textSize">Text Size</label>
                        <input id="textSizeInput" value={textsize} onChange={(e) => handleInputChange(e, 'textsize', setTextSize)} />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="padding">Padding</label>
                        <input id="paddingInput" value={padding} onChange={(e) => handleInputChange(e, 'padding', setPadding)} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="textColour">Text Colour</label>
                        <input id="textColourInput" value={textcolour} onChange={(e) => handleInputChange(e, 'textcolour', setTextColour)} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="bgColour">Background colour</label>
                        <input id="bgColourInput" value={bgcolour} onChange={(e) => handleInputChange(e, 'bgcolour', setBgColour)} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="cornerRadius">Corner radius</label>
                        <input id="cornerRadiusInput" value={cornerradius} onChange={(e) => handleInputChange(e, 'cornerradius', setCornerRadius)} />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="tooltipWidth">Tooltip width</label>
                        <input id="tooltipWidthInput" value={tooltipwidth} onChange={(e) => handleInputChange(e, 'tooltipwidth', setTooltipWidth)} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-input'>
                        <label htmlFor="arrowWidth">Arrow width</label>
                        <input id="arrowWidthInput" value={arrowwidth} onChange={(e) => handleInputChange(e, 'arrowwidth', setArrowWidth)} />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="arrowHeight">Arrow height</label>
                        <input id="arrowHeightInput" value={arrowheight} onChange={(e) => handleInputChange(e, 'arrowheight', setArrowHeight)} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className="form-input">
                        <label htmlFor="imageUpload">Upload Image</label>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e)}
                            />    {imageFile && (
                                <img
                                    src={imageFile}
                                    alt="Uploaded"
                                    style={{ maxWidth: '10%', maxHeight: '10%' }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Screen formChanged={count} />
        </>
    );
};

export default Form;

import React, { useEffect } from 'react';
import './index.css';



const Button = ({ text, data }) => {
	useEffect(() => {

		console.log(data, text)
	}, [data]);
	return (
		<>
			<div className="button-container">
				<div className='kcuhbhi' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
					<button className="button tooltip">{text}</button>
					<img className='arrow' style={{ width: data.arrowwidth, height: data.arrowheight }} src="/arrow.svg" />
					<div
						className="tooltip-content"
						style={{ color: data.textcolor, fontSize: data.textsize, padding: data.padding, backgroundColor: data.bgcolour, borderRadius: data.cornerradius, width: data.tooltipwidth }}>
						{data.tooltiptext}
					</div>
				</div>
			</div>
		</>
	);
};
export default Button;



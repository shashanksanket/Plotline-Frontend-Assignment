import React,{useEffect,useState} from 'react';
import './screen.css';
import Button from '../../components/Buttons/index'
const Screen = ({formChanged}) => {
	
    useEffect(() => {
        const storedBtn1 = localStorage.getItem('Button 1');
        if (storedBtn1) {
            setBtn1Styles(JSON.parse(storedBtn1));
        }

        const storedBtn2 = localStorage.getItem('Button 2');
        if (storedBtn2) {
            setBtn2Styles(JSON.parse(storedBtn2));
        }

        const storedBtn3 = localStorage.getItem('Button 3');
        if (storedBtn3) {
            setBtn3Styles(JSON.parse(storedBtn3));
        }

        const storedBtn4 = localStorage.getItem('Button 4');
        if (storedBtn4) {
            setBtn4Styles(JSON.parse(storedBtn4));
        }

        const storedBtn5 = localStorage.getItem('Button 5');
        if (storedBtn5) {
            setBtn5Styles(JSON.parse(storedBtn5));
        }

    },[formChanged]);
	const defaultFormdata = {
        targetelement: '',
        tooltiptext: 'Your Text Here',
        textsize: '10px',
        padding: '5px',
        textcolour: 'white',
        bgcolour: 'black',
        cornerradius: '5%',
        tooltipwidth: 'max-content',
        arrowwidth: '20px',
        arrowheight: '22px'
    };
	const [btn1,setBtn1Styles]=useState(defaultFormdata)
	const [btn2,setBtn2Styles]=useState(defaultFormdata)
	const [btn3,setBtn3Styles]=useState(defaultFormdata)
	const [btn4,setBtn4Styles]=useState(defaultFormdata)
	const [btn5,setBtn5Styles]=useState(defaultFormdata)

	
	return (
		<>
			<div className='screen'>
				<div className='topBtn'>
				<Button text="Button 1" data={btn1}/>
				<Button text="Button 2" data={btn2}/>
				</div>
				<div className='midBtn'>
				<Button text="Button 3" data={btn3}/>
				</div>
				<div className='bottomBtn'>
				<Button text="Button 4" data={btn4}/>
				<Button text="Button 5" data={btn5}/>
				</div>
			</div>
		</>
	);
};
export default Screen;

import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

const mainColor = 'indianred'

const Button = styled.button`
  color: red;
  font-size: 2.8em;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`;


const Report = (props: { onClose?: any; open?: any; }) =>{
   
    const { open, onClose } = props
  
  
    return(
        <>
        {/* // onClose={onClose} */}
  <Popup  open={open}
    onClose={onClose}   trigger={<Button className='' >Report</Button>} position="right center">
    
   
    <div className="popup-box">
      <div className="box">
       <h1>Report</h1>
       <div>
        <button className='report-button'>Violence</button><br></br>
        <button className='report-button'>Hate speech</button><br></br>
        <button className='report-button'>Threats</button><br></br>
       </div>
       <div>
        <button className='report-submit' onClick={props.onClose}>Submit</button>
       </div>
      
      </div>
    </div>

    </Popup>
        </>
    )
   
}
export default Report;
//export default (props) => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>

//);




import { useState } from 'react';
import 'reactjs-popup/dist/index.css';



import 'reactjs-popup/dist/index.css';
import styled from 'styled-components';

const mainColor = 'indianred'

const Button = styled.button`
  color: white;
  font-size: 16px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`;


const Report = () =>{
   
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
   
  }
  
  
  
    return(
        <>
      
        <Button   onClick={togglePopup}   >Report</Button>
    
        {isOpen &&
    <div className="popup-box">
      <div className="box">
       <h1>Report</h1>
       <div>
        <button className='report-button'>Violence</button><br></br>
        <button className='report-button'>Hate speech</button><br></br>
        <button className='report-button'>Threats</button><br></br>
       </div>
       <div>
        <button className='report-submit'       onClick={togglePopup}>Submit</button>
     
       </div>
      
      </div>
    </div>
}
   
        </>
    )
   
}
export default Report;
//export default (props) => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>

//);




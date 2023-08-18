
import styled from 'styled-components';
import logoerror from '../../assets/images/logo-error.svg';

  const $center = styled.div`
    padding: 70px 0;
  
    text-align: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: inline-block;
  `;
const Body = styled.div`
margin: auto 10px;
width: auto;
height: 2000px;

`;
const $inlineblock =styled.div`
display: inline-block;
float: left;
`;
const NotFound = () => {
  // return <div>404 not found</div>;
  return(

  <>
  <Body className='bg-secondary-700'>
  <$center>
  <$inlineblock className=''>
      4
  </$inlineblock> 
 <$inlineblock><img className="h-20 w-20" src={logoerror} /></$inlineblock> 
  <$inlineblock>
      4
  </$inlineblock>
  </$center>
  </Body>
  <div>404 not found</div>;
  </>
   )
};

export default NotFound;

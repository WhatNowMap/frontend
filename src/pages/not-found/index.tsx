
import styled from 'styled-components';
import logoerror from '../../assets/images/logo-error.svg';

  const $center = styled.div`
    padding: 70px 0;
  
    text-align: center;
    margin: 0;
    position: absolute;
    top: 45%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: inline-block;
  `;

  const $card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

 
const Body = styled.div`
margin: auto 10px;
width: auto;
height: 2000px;

`;
const $inlineblock =styled.div`
display: inline-block;
float: left;
color:rgba(143, 116, 187, 1);
`;
const $rel =styled.div`
position: relative;
    top: 32px;
`;
const $div =styled.div`
display: inline-block;
float: left;
color:white;
`;
const Button =styled.button`
background-color:rgba(99, 59, 165, 1);
color:white;
border-radius:5px;
padding:10px 20px;

`;
const NotFound = () => {
  // return <div>404 not found</div>;
  return(

  <>
  <Body className='bg-secondary-700'>
  <$center>
 <$card>
  <$inlineblock className='text-[90px] '>
      4
  </$inlineblock> 
 <$rel><img className="h-20 w-20" src={logoerror} /></$rel> 
  <$inlineblock className='text-[90px]'>
      4
  </$inlineblock>
  </$card>
  <$div className='w-full text-[30px] py-5'>
  Opps!
  </$div>
  <$div className='w-full py-5'>
  The page you were looking for doesn’t exist
  </$div>
  <div className='w-full py-8 float-left'>
  <Button className='' >
        Go to home
      </Button>
  </div>
    
  </$center>
  </Body>

  </>
   )
};

export default NotFound;

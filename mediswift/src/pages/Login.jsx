import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar"
import Loginlogo from '../images/Loginlogo.png'


const Container = styled.div`

`;
const Wrapper = styled.div`
  background:#FDEEEF;
  display:flex;
  align-items:center;
  justify-content:center;
  height:90vh;

`;
const Logsection = styled.div`
  height:80%;
  width:60%;
  background:white;
  display:flex;

`;

const Left = styled.div`
  flex:45%;
  background:#03B0BE;
  color:white;
`;

const Heading = styled.p`
  font-size:35px;
  font-weight:500;
  margin: 30px 20px 10px 20px;  
`;
const Desc = styled.p`
  opacity:0.75;
  font-size:18px;
  margin:20px;
 
`;

const Image = styled.img`
    height:400px;
    width:400px;
`;

const Right = styled.div`
  flex:55%;
`;
const DetailsWrapper = styled.div`
  margin-top:60px;
  display:flex;
  flex-direction:column; 
  margin-left:45px;
  width:80%;
`;
const Input = styled.input`
  width:100%;
  height:30px;
  font-size:16px;
  border:none;
  margin-top:25px;
  &:focus-visible {
    outline: none;
  } 
`;
const Text = styled.p`
  margin-top:30px;
  font-size:12px;
  color:grey;
`;

const OtpBtn = styled.button`
  margin-top:20px;
  height:40px;
  width:100%;
  font-size:20px;
  font-weigth:500;
  background:orange;
  border:none;
  border-radius:5px;
  color:white;
`;

const Bottomline = styled.div`
  display:flex;
  justify-content:center;
  margin-top:50px;
  
`;
const BotText = styled.p`
  color: blue;
  font-weight:500;
`;


const Login = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Logsection>
            <Left>
              <Heading>Login</Heading>
              <Desc>Get access to your Orders,<br></br>Wishlist and Recommendations</Desc>
              <Image src={Loginlogo}/>
            </Left>
            <Right>
                <DetailsWrapper>
                  <Input placeholder='Enter Email/Mobile number'/>
                  <hr/>
                  <Input placeholder='Enter password'/>
                  <hr/>
                  <Text>By continuing, you agree to MediSwift Terms of Use and Privacy Policy.</Text>
                  <OtpBtn>Continue</OtpBtn>
                  <Bottomline>
                    <BotText>New to MediSwift? Create an Account</BotText>
                  </Bottomline>
                </DetailsWrapper>
            </Right>
        </Logsection>
      </Wrapper>
    </Container>
  )
}

export default Login;


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
  height:95vh;

`;
const Details = styled.div`
  height:85%;
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
const Title = styled.h2`
  margin:20px;
`;
const DetailsCont = styled.div`
  width:70%;
  padding:20px;
  background:;
  border:1px solid grey;
  margin-left:50px;
`;


const Text = styled.p`
  margin-bottom:5px;
  font-weight:600;
  font-size:16px;
`;

const Input = styled.input`
  width:95%;
  font-weight:500;
  font-size:15px;
  margin-bottom:10px;
  border: 2px solid lightgrey;
  padding:8px ;
  &:focus-visible {
    outline: none;
  } w
`;


const Terms = styled.p`
  font-size:16px;
  font-weight:500;
  margin:10px 0px;
`;

const Btn =styled.button`
  margin:10px 0px;  
  width:95%;  
  height:35px;
  font-size:16px;
  background:#FFA500;
  border:none;
  border-radius:5px;
  color:white;
`;


const Register = () => {
  return (
    <Container>
      <Navbar/>
      <Wrapper>
        <Details>
            <Left>
              <Heading>Looks like you're new here!</Heading>
              <Desc>Sign up with mobile number or email to get started</Desc>
              <Image src={Loginlogo}/>
            </Left>
            <Right>
                <Title>CREATE ACCOUNT</Title>
                <DetailsCont>
                        <Text>Your Name</Text>
                        <Input placeholder='First and last name' required/>
                        <Text>Mobile number</Text>
                        <Input placeholder='Mobile number' required/>
                        <Text>Email id</Text>
                        <Input />
                        <Text>Password</Text>
                        <Input placeholder='Atleast 8 characters' required/>
                    <Terms><input type='checkbox' required/>  By Sign in on MediSwift you accept our Terms & Conditons</Terms>
                    <Btn>Confirm</Btn>
                    <Btn>Already have an Account? <a href="www.google.com">Login</a></Btn>
                </DetailsCont>

            </Right>
        </Details>
      </Wrapper>
    </Container>
  )
}

export default Register;

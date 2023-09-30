import React from 'react';
import styled from 'styled-components';
import demoimg from '../images/demoimg.png'
import { FavoriteBorder, ShoppingBagRounded, Star } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Container = styled.div`
    display:flex;
    justify-content:center;
`;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    justify-content:center;
    width:80vw;
`;
const ImageContainer = styled.div`
    flex:1;
`;
const Image = styled.img`
    margin-left:10px;
    height:80vh;
    width:50%;
    
`;
const InfoContainer = styled.div`
    flex:1;
    padding:0px 40px;
`;
const Title = styled.h1``;
const Desc = styled.p`
    margin: 5px 0px;
    color:#8A99A7;
    font-size:20px;
`;

const Ratings = styled.div`
    width:30%;
    height:20px;
    margin-top:20px;
    margin-bottom:10px;
    padding:3px;
    border: 2px solid lightgrey;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:200
`

const Price = styled.div`
    width:50%;
    display:flex;
    justify-content:flex-start;
    margin:10px 0px;
    font-size:25px;
    

`;
const Amount = styled.div`
    font-weight:700;
    
`;
const Mrp = styled.div`
    padding-left:20px;
    color:#8A99A7;
    font-weight:400;
    text-decoration: line-through;
`;

const Taxes= styled.div`
    color:green;
    font-size:15px;
    font-weight:600;
`;

// const SizeWrapper= styled.div``

// const Sizehead =styled.div`
//     margin: 30px 0px;
//     font-size:18px;
//     font-weight:600;
// `;

// const Sizes = styled.div`
//     display:flex;
//     justify-content:flex-start;
    
// `;
// const SizeList = styled.div`
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     height:40px;
//     width:40px;
//     margin:0px 5px;
//     border-radius:50%;
//     border:1px solid lightgrey;
// `;
const Buttons = styled.div`
    display:flex;
    margin:30px 0px;
    width:80%;
    font-weight:500;
    
`;
const Add = styled.div`
    flex:60%;
    margin-right:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px 0px;
    background:#FF3E6C;
    color:white;
    
`;
const Wishlist = styled.div`
    flex:40%;
    border:1px solid lightgrey;
    display:flex;
    justify-content:center;
    align-items:center;
    
`;
const Line = styled.hr``;

const DelWrapper = styled.div`

`;
const DelHead = styled.p`
    font-size:18px;
    font-weight:600;
    margin:20px 0px;
    
`;
const Inputbox = styled.div`
    width: 55%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding:5px 10px;
    border:1px solid lightgrey;
`;
const Input = styled.input`
    font-size:16px;
    border:none;

`;

const Check = styled.div`
    color:#FF3E6C;
`;
const StockLine = styled.p`
    margin-top:10px;
    font-size:14px;
    color:grey;
`


const Product = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src={demoimg} />
            </ImageContainer>
            <InfoContainer>
                <Title>Roadster </Title>
                <Desc>
                    Maroon Stripped Casual Cotton Shirt
                </Desc>
                <Ratings>4.5 <Star/>| 912 Ratings</Ratings>
                <Line/>
                <Price>
                    <Amount> ₹500</Amount>
                    <Mrp> Mrp :₹1200</Mrp>
                </Price>
                <Taxes>inclusive of all Taxes</Taxes>
                <Buttons>
                    <Add> 
                        <ShoppingBagRounded/>
                        ADD TO CART
                    </Add>
                    <Wishlist>
                        <FavoriteBorder/>
                         WISHLIST
                    </Wishlist>
                </Buttons>
                <Line/>

                <DelWrapper>
                    <DelHead>Delivery Options</DelHead>
                    <Inputbox>
                        <Input placeholder='Enter pincode'/>
                        <Check>Check</Check>
                    </Inputbox>
                    <StockLine>Please Enter Pincode to check Stock Availability</StockLine>
                </DelWrapper>
            </InfoContainer>
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Product

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FavoriteBorder, ShoppingBagRounded, Star } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
// import { publicRequest } from '../ResponseMethod';
import axios from 'axios';
import { Link } from 'react-router-dom';


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


const Buttons = styled.div`
    display:flex;
    margin:30px 0px;
    width:80%;
    font-weight:500;
    
`;
const Add = styled.div`
    
    width:20vw;
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


const Singleproduct = (props) => {
    const location =useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id);
    const [product,setProduct]=useState({});
    // const [quantity,setQuantity]=useState(1);

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res = await axios.get(`http://localhost:5000/api/products/find/`+id);
                setProduct(res.data);
                console.log(res.data);
            }
            catch(err){

            }
        }
    getProduct(); 
    },[id])

  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <ImageContainer>
                <Image src={product.img} />
            </ImageContainer>
            <InfoContainer>
                <Title>{product.title} </Title>
                <Desc>
                    {product.desc}
                </Desc>
                <Ratings>4.5 <Star/>| 912 Ratings</Ratings>
                <Line/>
                <Price>
                    <Amount>₹{product.price}</Amount>
                    {/* <Mrp> Mrp :₹1200</Mrp> */}
                </Price>
                <Taxes>inclusive of all Taxes</Taxes>
                <Buttons>
                    <Link to={`/cart`}>
                    <Add> 
                        <ShoppingBagRounded/>
                        ADD TO CART
                    </Add>
                    </Link>
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

export default Singleproduct;

import React from 'react';
import styled from 'styled-components';
import CategoryItem from '../components/CategoryItem';
import Navbar from "../components/Navbar";
import {productsdata}from "../categoriesdata"
import Footer from '../components/Footer';

const Container = styled.div`
    width:85%;
    margin: 0 auto;
    
`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
`;


const Products = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
        {
            productsdata.map((item)=>(
                <CategoryItem item={item} key={item.id} />
            ))
        }
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Products

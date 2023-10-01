import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryItem from '../components/CategoryItem';
// import { productsdata } from '../categoriesdata';
import axios from 'axios';


const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
`;

const Product = (props) => {
    const [products,setProducts]= useState([]);

    useEffect(()=>{
        const getProducts = async ()=> {
            try{
                const res = await axios.get(props.cat ? `http://localhost:5000/api/products?categories=${props.cat}`:"http://localhost:5000/api/products");
                setProducts(res.data);
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }   
        }
        getProducts();
    },[props.cat])
  return (
    <Wrapper>
        {  products.map((item) => (
            <CategoryItem item={item} key={item.id} />
          ))}
    </Wrapper>
  )
}

export default Product;

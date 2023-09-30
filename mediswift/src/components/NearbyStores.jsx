import React from "react";
import styled from "styled-components";
import mapicon from "../images/map.png";
const Container = styled.div`
  margin: 20px 0px;
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9ff;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShopLogo = styled.img`
  margin-right: 10px;
`;
const NearbyText = styled.div``;
const Heading = styled.h2``;
const Subline = styled.div`
  color: green;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 50%;
  height: 100%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;
const NearbyStores = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ShopLogo src="https://www.netmeds.com/assets/icons/store.png" />
          <NearbyText>
            <Heading>Locate Pharmacy Shops</Heading>
            <Subline>Pharmacy Shop Near you </Subline>
          </NearbyText>
        </Left>
        <Right>
          <Img src={mapicon} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NearbyStores;

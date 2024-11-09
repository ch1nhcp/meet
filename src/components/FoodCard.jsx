import React, { useState } from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function FoodCard({ randomFood }) {
  const [love, setLove] = useState(false);
  console.log(randomFood);
  const toggleLove = () => {
    setLove(!love);
  };
  return (
    <>
      {randomFood ? (
        <StyledCardWrapper>
          <StyledLoveWrapper>
            {love ? (
              <FaHeart onClick={toggleLove} />
            ) : (
              <CiHeart onClick={toggleLove} />
            )}
          </StyledLoveWrapper>
          <StyledImgWrapper>
            <img src={randomFood.img_url} alt={randomFood.short_description} />
          </StyledImgWrapper>
          <h1>{randomFood.food_name}</h1>
          <p>{randomFood.short_description}</p>
        </StyledCardWrapper>
      ) : (
        <StyledCardWrapper>genenrate your food!</StyledCardWrapper>
      )}
    </>
  );
}

export default FoodCard;

const StyledCardWrapper = styled.div`
  cursor: pointer;
  padding: 20px;
  width: 400px;
  height: 400px;
  border-radius: 50px;
  text-align: center;
  background-color: #fff;
`;

const StyledLoveWrapper = styled.div`
  padding: 20px;
  text-align: right;
`;

const StyledImgWrapper = styled.div`
  .img {
    border-radius: 50px;
  }
`;

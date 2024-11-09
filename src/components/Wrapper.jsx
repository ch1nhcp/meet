import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import FoodCard from "./FoodCard";
import BookmarkCount from "./BookmarkCount";
import StyledBtn from "./StyledBtn";

function Wrapper({ foodData }) {
  const [randomFood, setRandomFood] = useState(null);

  const handleRandomFood = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * foodData.length);
    setRandomFood(foodData[randomIndex]);
  };

  return (
    <>
      <Container>
        <Logo />
        {randomFood && <BookmarkCount />}
        <FoodCard randomFood={randomFood} />
        <StyledBtn onClick={handleRandomFood}>Foodyyy</StyledBtn>
      </Container>
    </>
  );
}

export default Wrapper;

const Container = styled.section`
  padding: 52px;
  background: #f2f8f6;
  border-radius: 50px;
  text-align: center;
`;

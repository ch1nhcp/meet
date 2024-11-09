import React from "react";
import styled from "styled-components";

function StyledBtn({ children, onClick }) {
  return (
    <>
      <StyledButton>
        <button class="button" onClick={onClick}>
          {children}
        </button>
      </StyledButton>
    </>
  );
}

export default StyledBtn;
const StyledButton = styled.div`
  .button {
    --color: #08814a;
    font-family: "Poppins", sans-serif;
    color: #b3eed9;
    padding: 15px 30px;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
    font-weight: 500;
    outline: none;
    border: 2px solid var(--color);
    font-size: 16px;
    position: relative;
    isolation: isolate;
  }

  .button:before {
    content: "";
    height: 100%;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--color);
    z-index: -1;
    transition: width 0.25s ease-in;
  }

  .button:hover:before {
    width: 100%;
  }
`;

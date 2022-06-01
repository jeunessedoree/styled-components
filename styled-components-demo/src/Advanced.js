import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 20px;
    background-color: ${props => props.bgColor || "green"};
    text-align: center;
    color:  ${props => props.inputColor || "white"};
    border: 1px solid #000000;
    cursor: pointer;
`;

const Advanced = (props) => {
   const { inputColor, bgColor } = props;

    return (
        <Button inputColor={inputColor} bgColor={bgColor}>
           I am a button 
        </Button>
    )
}

export default Advanced;
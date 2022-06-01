import React from 'react';
import './Header.css';

import styled from 'styled-components';

const Title = styled.div`
    padding: 20px;
    background-color: #222;
    text-align: center;
    color: white;
`;

const Header = props => {
    const { title } = props;

    return (
        <Title>
           {title}
        </Title>
    )
}

export default Header;
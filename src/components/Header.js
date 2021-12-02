import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Box>
            <NavLinks>
                <li><a>Home</a></li>
                <li><a>Products And Services</a></li>
                <li><a>Contact Us</a></li>
            </NavLinks>

            <h1>Cityz Vibes</h1>
        </Box>
    )
}

export default Header


const Box = styled.div `
    display: flex;
    margin: 0 18%;
    padding-top: 14px;
    align-items: center;
    ${'' /* background: #F7F2FA; */}
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0 0 4px rgba(0, 0, 0, 0.25);
    padding: 0 40px;
    position: sticky;
    top: 0;
    z-index: 10;
    border-radius: 4px;

    h1{
        text-transform: uppercase;
        font-size: 36px;
        font-family: Saira Stencil One;
        font-style: normal;
        font-weight: normal;
        color: #50107C;
    }
`

const NavLinks = styled.ul `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    flex: 1;

    li{
        display: block;
        list-style: none;
        margin-right: 40px;
    }

    a{
        color: rgba(114, 63, 150, 1);
    }
`
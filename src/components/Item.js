import { logDOM } from '@testing-library/dom'
import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'

function Item() {
    const location = useLocation();
    const obj = location.state;
    const title = obj.title;
    const Id = obj.userId;
    const image = obj.url;
    console.log(location);
    return (
        <Box>
            <img src={image} />
            {Id} {title}
            <a href="/images/background.png" download> download</a>
        </Box>
    )
}

export default Item


const Box = styled.div `
    a{
        cursor: pointer;
        color: red;
    }
`
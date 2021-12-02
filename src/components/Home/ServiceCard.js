import React from 'react';
import styled from 'styled-components';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

function ServiceCard() {
    return (
        <Box>
            <ImageBox>
                <img src="https://cityzvibes.com/wp-content/uploads/2018/12/globe-free-img-150x150.png" />
            </ImageBox>
            <InfoBox>
                <Heading>Best Delivery In Lucknow</Heading>
                <Para>
                    Cityz Vibes will Deliver Your Products in Less then 1 to 2 Hours
                    at Your Doorstep.
                </Para>
            </InfoBox>
        </Box>
    )
}

export default ServiceCard


const Box = styled.div `
    height: 150px;
    width: 150px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    align-items: center;
    justify-content: center;
    padding: 10px;
`

const ImageBox = styled.div `
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;

    img{
        height: 50px;
        width: 50px;
    }
`

const InfoBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`

const Heading = styled.div `
    font-size: 11px;
    font-weight: 500;
    color: rgba(82, 43, 108, 0.78);
`

const Para = styled.p `
    font-size: 9px;
    text-align: center;
    padding-top: 2px;
    color: rgba(130, 82, 163, 0.78);
`
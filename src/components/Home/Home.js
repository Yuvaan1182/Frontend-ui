import React from 'react'
import styled from 'styled-components';
import ServiceCard  from './ServiceCard';

function Home() {
    return (
        <Box>
            <FirstContainer>
                <LeftInfoContainer>
                    <h1>Best Products With Fast Delivery</h1>
                    <p>Enjoy Greatest Sales and Marketting Services 
                        Easy door to door services for our customers and many
                        more. Join the Party and become a member of a
                        very precious and delightful community.
                    </p>
                    <h3>Cityz Vibes Heavy Discount Up To 50% Off On Selected Products</h3>
                    <ButtonContainer>
                        <Button>DownLoad</Button>
                        <Button>DownLoad</Button>
                    </ButtonContainer>
                </LeftInfoContainer>
                <RightImageContainer>
                    <img src="/images/lady.svg" />
                </RightImageContainer>
            </FirstContainer>


            <SecondContainer>
                <Head>Top Deals and Offers</Head>
                <Group>
                    <LeftImageContainer>
                    </LeftImageContainer>
                    <RightInfoContainer>
                        <h1>Latest Shoes And Trending Accessories
                        </h1>
                        <p>Fashionable Shoes , Accessories and Many More Trending Items</p>
                        <a>Shop Now</a>
                    </RightInfoContainer>
                </Group>

                <Group>
                    <LeftContainer>
                        <h1>Up To 60% OFF
                            On Home equipments
                        </h1>
                        <p>Create Your Own Trend With Us</p>
                        <a>Shop Now</a>
                    </LeftContainer>
                    <RightImgContainer>
                    </RightImgContainer>
                </Group>
                
            </SecondContainer>


            <ServicesContainer>
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </ServicesContainer>


            <Footer>
                <Up>
                    <ColOne>
                        <BrandName>Cityz Vibes</BrandName>
                        <Desc>
                            Focusing on improving the user experience
                            day by day. We have a community who is dedicated
                            to achieve the same and we are making ourselves
                            sure to be the best company offering nearby
                            market products at best price.
                        </Desc>

                        <SocialMediaIcons>
                            
                        </SocialMediaIcons>
                    </ColOne>
                    <ColTwo>
                        <Heading>Contact US</Heading>
                        <Item>
                            <p>Cityz Vibes Office, Ratan Khand Ruchi Khand 1 
                                Sharda Nagar,Lko, Uttar Pradesh, 226009, India
                            </p>
                            <img src="/images/map-pin.svg"/>
                        </Item>
                        <Item>
                            <p>+91 8233294891<br/>
                            +91 8233294891</p>
                            <img src="/images/phone.svg" />
                        </Item>
                        <Item>
                            <p>support@cityzvibes.com</p>
                            <img src="/images/mail.svg"/>
                        </Item>
                    </ColTwo>
                    <ColThree>
                        <Heading>Quick Links</Heading>
                        <a>Home</a>
                        <a>Products and Services</a>
                        <a>Contact Us</a>
                    </ColThree>
                </Up>
                
                <Down>
                    <p>Copyright © 2021 Cityz Vibes</p>
                    <p>Powered by Cityz Vibes</p>
                </Down>
            </Footer>
           
        </Box>
    )
}

export default Home;


const Box = styled.div `
    width: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`

const FirstContainer = styled.div `
    display: flex;
    padding: 0 18%;
`

const LeftInfoContainer = styled.div `
    display: flex;
    flex: 1;
    flex-direction: column;

    h1{
        font-family: Saira Stencil One;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 47px;
        color: #50107C;
    }

    p{
        padding: 40px 0;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 23px;
        color: rgba(102, 67, 125, 1);
    }

    h3{
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 31px;
        color: #723F96;
        font-weight: 700;
    }
`

const ButtonContainer = styled.div `
    display: flex;
    padding: 40px 0;
`

const Button = styled.div `
    margin-right: 40px;
    font-family: Sanchez;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    background: #8F69A9;
    border-radius: 10px;
    padding: 10px 30px;
`

const RightImageContainer = styled.div `
    flex: 1;
    
    img{
        transform: translateX(45px);
        filter: drop-shadow(0px 6px 4px rgba(80, 16, 124, 0.45));
    }
`

const SecondContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 100px 18%;
    padding-bottom: 0px;
`

const Head = styled.h1 `
    font-family: Saira Stencil One;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 80px;
    color: rgba(136, 100, 160, 1);
    margin-bottom: 50px;
    text-decoration: underline;
`

const Group = styled.div `
    display: flex;
    justify-content: center;
    ${'' /* position: relative; */}
    height: 400px;
    margin-bottom: 100px;
    filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.45));
`

const LeftImageContainer = styled.div `
    background: url("/images/LeftImage.jpg") no-repeat center/cover;
    border-radius: 15px;
    width: 70%;
`

const RightInfoContainer = styled.div `
    width: 400px;
    height: 240px;
    background: rgba(246, 200, 78, 0.90);
    border: 1px solid #EEB22D;
    border-radius: 15px;
    margin-left: -100px;
    margin-top: auto;
    margin-bottom: auto;    
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    h1{
        font-family: Jockey One;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
    }

    p{
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: rgba(0, 0, 0, 0.5);
    }

    a{
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #000000;
        opacity: 0.7;
        border: 1px solid #F6C84E;
        text-decoration: underline;
    }
`

const LeftContainer = styled.div `
    width: 400px;
    height: 240px;
    background: rgba(162, 156, 204, 0.90);
    border: 1px solid #A49DCC;
    border-radius: 15px;
    padding: 20px 30px;
    margin-right: -100px;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1{
        font-family: Jockey One;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 50px;
        color: #FFFFFF;
    }

    p{
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
    }

    a{
        text-decoration: underline;
        font-family: Sanchez;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #000000;
        opacity: 0.7;
    }
`

const RightImgContainer = styled.div `
    background: url("/images/rightImage.jpg") no-repeat center/cover;
    border-radius: 15px;
    width: 70%;
    
`

// rgba(47, 28, 61, 0.64)
const Footer = styled.div `
    border-radius: 7px;
    color: rgba(47, 28, 61, 0.7);
    display: flex;
    flex-direction: column;
    margin: 0px;
    box-shadow: 0px 0px 1px;
`

const ColOne = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    position: relative;

    ::before{
        content: "";
        position: absolute;
        bottom: 30px;
        right: -90px;
        width: 4px;
        height: 110px;
        background: rgba(0, 0, 0, .1);
    }
`

const ColTwo = styled.div `
    display: flex;
    flex-direction: column;
    width: 330px;
    position: relative;

    ::before{
        content: "";
        position: absolute;
        bottom: 30px;
        right: -90px;
        width: 4px;
        height: 110px;
        background: rgba(0, 0, 0, .1);
    }
`

const ColThree = styled.div `
    display: flex;
    flex-direction: column;

    a{
        cursor: pointer;
        font-family: Saira SemiCondensed, sans-serif;
        font-style: normal;
        font-size: 14px;
        line-height: 28px;
        font-weight: 700;
        color: rgba(47, 28, 61, 0.64);
    }

    a:hover{
        color: rgba(165, 94, 214, 1);
    }
`

const Heading = styled.div `
    font-family: Saira Stencil One;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    margin-bottom: 10px;
    padding-top: 10px;
    color: rgba(99, 43, 138, 1);
`

const Item = styled.div `
    display: flex;
    align-items: center;

    p{
        flex: 1;
        font-family: sans-serif;
        font-style: normal;
        font-size: 12px;
        font-weight: 600;
        padding: 10px 15px;
        padding-left: 0;
    }

    img{
        width: 40px;
        height: 40px;
    }
`

const Up = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 40px 12%;
`

const Down = styled.div `
    border-top: 1px solid rgba(153, 153, 203, .8);
    display: flex;
    justify-content: space-between;
    padding: 20px 12%;
    font-family: 'Rowdies', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
`

const BrandName = styled.h1 `
    font-family: Saira Stencil One;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    color: rgba(99, 43, 138, 1);
`

const Desc = styled.p `
    font-family: sans-serif;
    font-style: normal;
    font-size: 12px;
    font-weight: 600;
    padding-top: 15px;
`

const SocialMediaIcons = styled.div `
    display: flex;
    justify-content: space-between;
`

// __________________________ Service Container ________________________________

const ServicesContainer = styled.div `
    display: flex;
    padding: 40px 18%;
    justify-content: space-between;
`
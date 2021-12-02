import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Loadable from 'react-loadable'

function Loading()
{
  return <h2>Loading...</h2>
}

const Demo = Loadable({
    loader: ()=> import('./Home/Demo'),
    loading: Loading
})

function Test() {
    const [productList, setProductList] = useState([]);
    const [input, setInput] = useState("")
    useEffect(() => {
        fetch('https://www.traileraddict.com/trailerapi')
            .then(res => res.json())
            .then(data => { setProductList(productList => productList = data); console.log(data); });
        return () => {
            <h1>Sorry For Inconvenience</h1>
        }
    }, [])

    return (
        <Box>
            {/* <input type="text" value={input} onChange={e => setInput(e.target.value)} /> */}
            {
                {/* productList.filter((item) => {
                    if (item.title.toLowerCase().includes(input.toLowerCase()))
                        return item;
                }).map((product) => {
                    return (<Demo key={product.id} product={product} />)
                }) */}
            }
        </Box>
    )
}

export default Test


const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
import React from 'react'
import { Link } from 'react-router-dom'

function Demo( props ) {
    console.log(props.product.id);
    return (
        <Link to={{ pathname: `/item/${props.product.id}`, state: { props } }} >
            <div style={{height: `100px`, width: `100px`, color: `white`, borderRadius: `7px`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontWeight: `1000`}}>
                <img src={props.product.url} />
            </div>
        </Link> 
    )
}

export default Demo

import React from 'react'

import './scroll.css';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '3px solid black', height: '730px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;

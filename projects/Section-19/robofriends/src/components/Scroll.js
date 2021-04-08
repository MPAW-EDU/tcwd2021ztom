import React from 'react'

import '../styles/scroll.css';

const Scroll = (props) => {
    return (
        <div className="scroll">
            {props.children}
        </div>
    )
}

export default Scroll;

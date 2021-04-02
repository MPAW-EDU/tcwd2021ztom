
import React, { Component } from 'react'

import './hello.css';

const Hello = (props) => {
        return (
            <div className="f1 tc">
                <h1>Hello Component</h1>
                <p>Welcome to React {props.name}</p>
            </div>
        )
}

export default Hello;

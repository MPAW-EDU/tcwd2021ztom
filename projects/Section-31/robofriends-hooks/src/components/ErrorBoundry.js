
import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    };

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {

        return this.hasError?
            <h1>Oops, There was an error!</h1>:
            this.props.children
       
    }
}


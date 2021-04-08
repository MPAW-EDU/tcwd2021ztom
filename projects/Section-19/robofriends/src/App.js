
import React, { Component, useState } from 'react'
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

import axios from 'axios';

import './app.css';

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        axios
        .get('http://jsonplaceholder.typicode.com/users')
        .then( res =>
            this.setState({robots: res.data})
            // console.log(res.data)
        )
        .catch( err =>
            console.log(`API CALL FAILED: ${err}`)
        );
    };

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Searchbox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }

}

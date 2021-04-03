
import React, { Component, useState } from 'react'
import CardList from './CardList';
import Searchbox from './Searchbox';

import { robots } from './robots';

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <Searchbox onSearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        )
    }

}

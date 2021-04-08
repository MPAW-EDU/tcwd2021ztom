
import React, { Component } from 'react'
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import axios from 'axios';

import '../styles/app.css';

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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
            <h1 className="tc">Loading</h1>:
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox onSearchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        

    }

}

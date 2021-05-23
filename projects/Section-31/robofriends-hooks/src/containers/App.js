
import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import axios from 'axios';

import '../styles/app.css';

const App = () => {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        axios
        .get('http://jsonplaceholder.typicode.com/users')
        .then( res =>
            setRobots(res.data)
            // console.log(res.data)
        )
        .catch( err =>
            console.log(`API CALL FAILED: ${err}`)
        );
    }, [])
    

    const onSearchChange = (event) => {
        // console.log(event.target.value);
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length?
        <h1 className="tc">Loading</h1>:
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Searchbox onSearchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
}


export default App;

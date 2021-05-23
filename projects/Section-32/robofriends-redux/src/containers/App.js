
import React, { Component } from 'react'
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField } from '../redux/actions';

import axios from 'axios';

import '../styles/app.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
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

    render(){
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
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

}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

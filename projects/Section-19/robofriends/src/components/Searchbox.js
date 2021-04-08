import React from 'react'

const Searchbox = ({searchfield, onSearchChange}) => {

    return (
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue" 
                type="search" 
                placeholder="Search Robots"
                onChange={onSearchChange} 
            />
        </div>
    )
}

export default Searchbox

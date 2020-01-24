import React from 'react';

const SmurfCard = props => {
    return (
        <div key={props.id}>
            <h1>Smurf Name: {props.name}</h1>
            <p>This smurf is {props.age} years old and {props.height} tall!</p>
        </div>
    )
}

export default SmurfCard
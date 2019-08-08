import React from 'react';

const Display = ({props}) => {
    // console.log("props", props)
    
    return (
        <div className="display-container">
            <p>Strike: {props.strike}</p>
            <p>Ball: {props.ball}</p>
            <p>Foul: {props.foul}</p>
            <p>Hit: {props.hit}</p>
        </div>
    )
}

export default Display;
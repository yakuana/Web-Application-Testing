import React from 'react';

const HitCard = ({props}) => {
    // console.log("props", props)

    return (
        <div className="display-container">
            <p>Player id: {props.player}</p>
            <p>Strikes: {props.strike}</p>
            <p>Balls: {props.ball}</p>
            <p>Fouls: {props.foul}</p>
            <p>Nice hit!</p>
        </div>
    )
}

export default HitCard;
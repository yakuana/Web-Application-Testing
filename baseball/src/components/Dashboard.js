import React, { Component } from 'react';
import Display from './Display';
import HitCard from './HitCard';


class Dashboard extends Component {

    state = {
        strike: 0, 
        ball: 0, 
        foul: 0, 
        hit: 0, 
        player: 0,
        players: []
    }

    updateHit = () => {

        this.setState({
            players: [...this.state.players, this.state]
        })

        this.setState({
            strike: 0, 
            ball: 0, 
            foul: 0,
            hit: 0,
            player: this.state.player + 1
        })

    }

    updateStrike = () => {  
        let strikes = this.state.strike + 1; 

        console.log("new number of strikes", strikes)

        if (strikes >= 3) {
            this.setState({
                strike: 0, 
                ball: 0, 
                foul: 0, 
                hit: 0, 
            })
        } else {
            this.setState({
                strike: strikes, 
            })
        }
        
    }

    updateBall = () => {
        let balls = this.state.ball + 1; 

        console.log("new number of ball", balls)

        if (balls >= 3) {
            this.setState({
                strike: 0, 
                ball: 0, 
                foul: 0, 
                hit: 0, 
            })
        } else {
            this.setState({
                ball: balls
            })
        }
        
    }

    updateFoul = () => {
        let fouls = this.state.foul + 1; 

        console.log("new number of fouls", fouls)

        if (this.state.strike < 2) {
            this.setState({
                strike: this.state.strike + 1, 
                ball: 0,
                foul: fouls 
            })
        } else {
            this.setState({
                foul: fouls
            })
        }
    }

    render() {
        return (
            <div className="container">
                <Display props={this.state}/>

                <div className="dashboard-container">
                    <button data-testid="strikeButton" onClick={this.updateStrike}>strike</button>
                    <button onClick={this.updateBall}>ball</button>
                    <button onClick={this.updateFoul}>foul</button>
                    <button onClick={this.updateHit}>hit</button>
                </div>

                {this.state.players.map((person) => (<HitCard props={person} key={person.id}/>))}

            </div>
        )
    }  
}

export default Dashboard; 
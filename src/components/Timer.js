import React, { Component } from 'react';
// import Countdown from 'react-countdown';
import { Button } from '@material-ui/core';

// const Completionist = () => <span>Time's Up!</span>;
// const initialTime = 90

export class Timer extends Component {

    state = {
        seconds: this.props.remaining,
        timeIsUp: this.props.timeIsUp,
    }

    componentDidMount() {
        console.log(this.props.remaining)
        console.log(this.state.timeIsUp)
    }

    componentDidUpdate() {

        if(this.state.timeIsUp===false) {
            this.countDown();
        }
    }

    countDown = () => {
        if (this.state.seconds > 0) {

            setTimeout(() => {
                const timeLeft = this.state.seconds
                const timeMinus = timeLeft - 1;
                this.setState({
                    ...this.state,
                    seconds: timeMinus,
                    timeIsUp: false,
                })

            }, 1000)

        } else {

            this.setState({

                ...this.state,
                timeIsUp: true,
            }) 
        }
    }

    resetTime = () => {
        this.setState({
            ...this.state, 
            seconds: this.props.remaining,
            timeIsUp: true,
        })
    }

    
    
    render() {
        return (
            <div className="timer">


                <h3>{this.state.seconds}</h3>
                {/* <h3>{this.props.remaining}</h3> */}
                
                <div className="board-buttons">

                    <Button
                        variant="contained"
                        onClick={this.countDown}
                        color="secondary"
                    >Start</Button>

                    <Button
                        variant="contained"
                        onClick={this.resetTime}
                        color="secondary"
                    >Reset</Button>

                </div>


                {/* <Countdown
                    date={Date.now() + 120000}
                >
                    <Completionist />
                </Countdown> */}


            </div>
        )
    }
}

export default Timer

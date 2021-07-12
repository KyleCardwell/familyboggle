import React from 'react';
import Dice from './Dice';

class GameBoard extends React.Component {
    render() {
        return (
            <div className="gameBoard">
                {this.props.diceList.map(letter => {
                    return (
                        <Dice key={(Math.floor(Math.random()*100))*(Math.floor(Math.random()*100))} letter={letter}/>
                    )
                })}
            </div>
        )
    }
}

export default GameBoard;
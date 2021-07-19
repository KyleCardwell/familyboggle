import React from 'react';
import Dice from './Dice';

class GameBoard extends React.Component {

    constructor( props ) {
        super( props );
    
        this.keyCount = 0;
        this.getKey = this.getKey.bind(this);
    }
    
    getKey(){
        return this.keyCount++;
    }

    render() {
        return (
            <div className="gameBoard">
                {this.props.diceList.map(letter => {
                    return (
                        <Dice 
                            key={this.getKey()}
                            letter={letter}
                            boardSizeName={this.props.boardSizeName}
                            />
                    )
                })}
            </div>
        )
    }
}

export default GameBoard;


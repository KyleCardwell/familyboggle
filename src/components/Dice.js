
import React from 'react';

class Dice extends React.Component {

    render() {

        return(
            <h2 className="gameDice">{this.props.letter}</h2>
        )
    }
}

export default Dice;
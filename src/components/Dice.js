
import React from 'react';

class Dice extends React.Component {

    sizeClass = (props) => {
        if(this.props.boardSizeName === "5 x 5"){
            return "fiveby5"
        } else {
            return "fourby4"
        }
    }

    render() {

        return(
            <h2 className={`gameDice ${this.sizeClass()}`}>{this.props.letter}</h2>
        )
    }
}

export default Dice;
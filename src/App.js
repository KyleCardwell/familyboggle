import './App.css';
import { dice4by4, dice5by5 } from './components/diceData';
import React from 'react';
import GameBoard from './components/GameBoard';
import { Grid, Button } from '@material-ui/core'
import Timer from './components/Timer';


const diceScramble = (array) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

const initialTime = 120;

class App extends React.Component {

  state = {

    diceList: [],
    remaining: initialTime,
    timeIsUp: true,
    boardSize: dice5by5,
    boardSizeName: "5 x 5"

  }

  componentDidMount() {
    
    this.scrambleDice();

  }

  componentDidUpdate(prevState, prevProps) {
    console.log("prevProps:", prevProps)
    console.log("prevState", prevState)
    if(prevProps.boardSizeName === this.state.boardSizeName) {
      return
    } else {
      this.scrambleDice();
    }
    

  }

  boardSizeChange = () => {

    const newSize = this.state.boardSizeName === "5 x 5" ? "4 x 4": "5 x 5"
    if(newSize === "5 x 5") {

      this.setState({
        ...this.state,
        boardSizeName: newSize,
        boardSize: dice5by5,
      })

    } else {

      this.setState({
        ...this.state,
        boardSizeName: newSize,
        boardSize: dice4by4,
      })
    }

  }

  scrambleDice = () => {
    const diceLetters = this.state.boardSize.map(die => {
    const letter = die[Math.floor(Math.random() * die.length)]
      return letter;
    })
    
    diceScramble(diceLetters)

    this.setState({
      diceList: diceLetters
    })
  }

  render() {


    return (
      <div className="App">
        
        <Grid
          className="App-header gameBoardBox"
          >
          
          <Timer 
            remaining={this.state.remaining}
            timeIsUp={this.state.timeIsUp}
          />
        
          <GameBoard
            diceList={this.state.diceList}
            boardSizeName={this.state.boardSizeName}
          />
          
          <div>
            <Button
              onClick={this.boardSizeChange}
              color="secondary"
            >Make {this.state.boardSize === dice4by4 ? "5 x 5": "4 x 4"}</Button>
 
          </div>

        </Grid>
        
      </div>
    );
}
}

export default App;
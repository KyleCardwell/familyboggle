import logo from './logo.svg';
import './App.css';
import { dice4by4, dice5by5 } from './components/diceData';
import React from 'react';
import GameBoard from './components/GameBoard';


const diceScramble = (array) => {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}


class App extends React.Component {

  state = {
    diceList: [],
  }

  componentDidMount() {
    
    const diceLetters = dice5by5.map(die => {
      const letter = die[Math.floor(Math.random() * die.length)]
      return letter;
    })
    
    diceScramble(diceLetters)

    this.setState({
      diceList: diceLetters
    })

  }

  componentDidUpdate() {
    // console.log(this.state.diceList)
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <GameBoard diceList={this.state.diceList}/>
          
        </header>
      </div>
    );
}
}

export default App;

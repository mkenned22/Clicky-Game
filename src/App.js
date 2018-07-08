import React, { Component } from 'react';
import Navpills from "./components/Navpills";
import Jumbotron from "./components/Jumbotron";
import dogs from './dogs.json'
import Square from './components/Square'

class App extends Component {
    state = {
        topScore: 0,
        curScore: 0,
        dogs: dogs,
        unselectedDogs: dogs
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectDog = breed => {
        const findDog = this.state.unselectedDogs.find(item => item.breed === breed);

        if(findDog === undefined) {
            // failure to select a new dog
            this.setState({ 
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                dogs: dogs,
                unselectedDogs: dogs
            });
        }
        else {
            // success to select a new dog
            const newDogs = this.state.unselectedDogs.filter(item => item.breed !== breed);
            
            this.setState({ 
                curScore: this.state.curScore + 1,
                dogs: dogs,
                unselectedDogs: newDogs
            });
        }

        this.shuffleArray(dogs);
    };

    render() {
        return (
          <div>
          <Navpills
                curScore={this.state.curScore}
                topScore={this.state.topScore}
            />
          <Jumbotron>
            <h1>Clicky Game</h1>
          </Jumbotron>
          {
                    this.state.dogs.map(dog => (
                        <Square
                            breed={dog.breed}
                            image={dog.image}
                            selectDog={this.selectDog} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
        </div>
        );
    }
}

export default App;

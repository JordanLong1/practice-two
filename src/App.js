import React from 'react'; 
import InputData from './InputData'; 
import ShowData from './ShowData';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: '', favoriteAnimal: ''}
  }

  handleChange = (e) => {

    this.setState({
      name: e.target.value
    })
  }

  handleAnimalChange = (e) => {
    this.setState({
      favoriteAnimal: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label htmlFor='name'>Enter name:</label>
          <InputData type='text' id='name' value={this.state.name} onChange={this.handleChange} />
          <label htmlFor='animal'>Favorite Animal</label>
          <InputData type='text' id='name' value={this.state.favoriteAnimal} onChange={this.handleAnimalChange} />
        <ShowData name={this.state.name} favoriteAnimal={this.state.favoriteAnimal} />
      </div>
    )
  };
};

export default App;
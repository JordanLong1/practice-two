import React from 'react'; 
import InputData from './InputData'; 
import ShowData from './ShowData';
import Label from './Label'
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: '', favoriteAnimal: ''}
  }; 

  handleChange = (e) => {

    this.setState({
      name: e.target.value
    });
  };

  handleAnimalChange = (e) => {
    this.setState({
      favoriteAnimal: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Label htmlFor='name' innerText='Enter name:'/>
          <InputData type='text' id='name' value={this.state.name} onChange={this.handleChange} />
          <Label htmlFor='animal' innerText='Enter Animal:'/>
          <InputData type='text' id='name' value={this.state.favoriteAnimal} onChange={this.handleAnimalChange} />
        <ShowData name={this.state.name} favoriteAnimal={this.state.favoriteAnimal} />
      </div>
    );
  };
};

export default App;
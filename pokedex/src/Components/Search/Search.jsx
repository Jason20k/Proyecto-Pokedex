import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '',
      pokemon: null
    };
  }

  traerDatos = async () => {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
    let data = await respuesta.json();
    console.log(data);

    let pokemon = data;
    this.setState({
      img: pokemon.sprites.other.dream_world.front_default,
      pokemon: pokemon
    });
  }

  handleName = (event) => {
    let aux = event.target.value.toLowerCase();
    this.setState({
      name: aux
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.traerDatos();
  }

  render() {
    if (this.state.img === '') {
      return (
        <div className='vista-card1'>
          <form>
            <input type="texto" placeholder='Busca tu pokemon' onChange={this.handleName} />
            <button className='btn btn-primary my-btn' type='submit' onClick={this.handleSubmit}>Buscar</button>
          </form>
          <img src={this.state.img} alt='' />
        </div>
      )
    } else {
      return (
        <div className='card vista-card2'>
          <div className='card-header text-black'>
            {this.state.name}
          </div>
          <div className='card-body'>
            <img src={this.state.img} alt={this.state.name} />
            <p>Altura: {this.state.pokemon.height}</p>
            <p>Peso: {this.state.pokemon.weight}</p>
            {this.state.pokemon.types.map((type, index) => (
              <p key={index}>Tipo: {type.type.name}</p>))}
            <button className='btn btn-light' onClick={() => { this.setState({ name: '', img: '', pokemon: null }) }}>Regresar</button>
          </div>
        </div>
      )
    }
  }
}

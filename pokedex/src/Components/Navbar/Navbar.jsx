import { Component } from 'react'  


export default class Navbar extends Component {  
   
  constructor(props){
    super(props);
    this.state= {
      title: ''
    }
   }

  render() {  
    return (  
      <div>  
        <nav className="navbar bg-body-tertiary">  
         <div className="container-fluid">  
           <a className="navbar-brand" href="/">
            <img className='img-nav' src='/pokedex.webp' alt='/'/>
            {this.props.name}</a>  
         </div>  
        </nav>  
      </div>  
    )  
  }  
}

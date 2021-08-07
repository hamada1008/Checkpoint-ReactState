import React from "react";
import infs from './Profile/Inf';


const styyle = {
  display: 'flex',
  flexFlow: 'wrap column',
  border: '7px inset red',
  padding: '10px',
  borderRadius: '15px',
  boxShadow: '5px 5px 10px 0px black',
  height:'fit-content',
  marginTop :'180px'}

  

const pad = a => (parseInt(a) < 10 ) ? (a = '0'+a) : a;
const tyme = new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds();




class App extends React.Component {
  constructor() {
    super()
    this.state = infs
    this.state.toggle = true
    this.state.timer = "00:00:00"

  }


  alerted = (event) => {this.setState(alert(this.state.name))};

  toggled = () => this.setState({toggle : !this.state.toggle});
  


  componentDidMount() {

  

    
      setInterval(() => {
        
        var currentime = new Date().getHours() * 3600 + new Date().getMinutes() * 60 + new Date().getSeconds()
        this.setState({timer: (pad((Math.floor((currentime-tyme) / 3600 )).toString()) + ":" + pad(((Math.floor((currentime-tyme) / 60)) ).toString()) + ":" + pad((Math.floor((currentime-tyme) % 60 )).toString())
        )})
      }, 1000);
      console.log(this.state.timer, tyme)
      
      
    }







  render() {
  return (
    
    <div>
      <div className='tcont'><p className='tymer'>Time spent on this site<span className='spti'> {this.state.timer}</span></p></div>
    <button className='tog' onClick={this.toggled}>{this.state.toggle? 'Hide' : 'Show'} profile</button>
    {this.state.toggle && 
    <div style= {styyle}>
       <div style={{display:'flex' , alignItems:'center', flexDirection: 'column'}}>

  <h1 style={{fontWeight:'bolder' , color: '#8a0303', fontFamily:'bloody'}}>{this.state.name}</h1>
  <h4> <span style = {{textDecoration:'underline'}}>Profession :</span> {this.state.prof}</h4>
  <ul><h5 style={{fontWeight:'bold'}}>{this.state.bio}</h5> 

  <p style={{width:'500px'}}>{this.state.biol}</p>

  </ul>
  <div>
  <img style={{borderRadius:'15px', boxShadow:' 5px 5px 0px 0px rgba(96,16,16,0.75)' , height:'320px', width: 'auto'}} src={this.state.img} alt="myim" /> 
  </div>
  <button className='btn' onClick={this.alerted}> Don't click me </button>



</div>
    
     
     
    
    </div>
    }
    </div>
  );}
}

export default App;


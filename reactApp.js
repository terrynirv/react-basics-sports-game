class Team extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        shots: 0,
        score: 0
      }
      this.shotSound = new Audio("./audio/Strong_Punch-Mike_Koenig-574430706.wav")
      this.scoreSound= new Audio("./audio/Boxing_arena_sound-Samantha_Enrico-246597508.wav")
    }
    shotHandler = () => {
  
      let score = this.state.score
      this.shotSound.play()
      if(Math.random() > 0.5){
        score += 1
        setTimeout(() => {
          this.scoreSound.play()
          }, 100)
      }
  this.setState((state, props) => ({
    shots: state.shots + 1,
    score
  }))
   }
    render(){
      let shotPercentageDiv
      if(this.state.shots){
      const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
      shotPercentageDiv = (
        <div>
          <strong> Shooting %: {shotPercentage}</strong>
          </div>)
      }
      return(
        <div className="Team">
        <h2>{this.props.name}</h2>
        
        <div className="identity">
        <img src= {this.props.logo} alt= {this.props.name}/>
        </div>
        <div>
        <strong> Shots:</strong> {this.state.shots}
        </div>
        
        <div>
        <strong>Score:</strong> {this.state.score}
        </div>
        {shotPercentageDiv}
        <button onClick ={this.shotHandler}>Shoot!</button>
        </div>
      )
    }
  }
  
  function Game (props){
    return (
      <div className="Game">
        <div className="stats">
        <h1> Welcome to {props.venue}!</h1>
       <Team
       name={props.visitingTeam.name}
       logo={props.visitingTeam.logoSrc}
       />
       <div className="versus">
       <h1>VS</h1>
      </div>
       <Team
       name={props.homeTeam.name}
       logo={props.homeTeam.logoSrc}
       />
       
        </div>
        </div>
    )
  }
  function App (props) {
    const youngBucks = {
      name: 'Young Bucks',
      logoSrc: './images/aew1152-t.jpeg'
    }
    const innerCircle = {
      name: 'Inner Circle',
      logoSrc: './images/aew1196-t.jpg'
    }
    const luchaBros ={
      name: 'Lucha Bros',
      logoSrc: './images/luchabros1005-t.png'
    }
    const soCal ={
      name: 'SCU',
      logoSrc: './images/aew1111-t.png'
    }
    return (
      <div className="App">
      <Game 
      venue= "Sears Centre Arena"
      homeTeam= {youngBucks}
      visitingTeam= {innerCircle} />
      <Game 
      venue ="Staple Center" 
      homeTeam= {luchaBros}
      visitingTeam={soCal} /> 
       
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
  
  
  
  // Render the App
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
import React from 'react';
import './App.css';
import Proptimus from './Proptimus'
import ProptimusBeta from './proptimusBeta'
import ProptimusPrime from './proptimusPrime'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
      activeProp: {}
    }
  }


  callForBadHelp = (event) => {
    this.setState({
      activeProp: "Proptimus Omega"
    })
    return(
      <Proptimus photo={this.state.proptimusPhotos["Proptimus Omega"]} catchphrase="I'm here to save the day!" callForBetterHelp={this.callForBetterHelp}/>
    )
  }

  callForBetterHelp = (event) => {
    //call proptimus beta
    this.setState({
      activeProp: "Proptimus Beta"
    })
    return(
      <ProptimusBeta photo={this.state.proptimusPhotos["Proptimus Beta"]} catchPhrase="We're doing it!" gimmeAllYouGot={this.gimmeAllYouGot}/>
    )
  }

  gimmeAllYouGot = (event) => {
    //call proptimus prime
    this.setState({
      activeProp: "Proptimus Prime"
    })
  }

  sendThemHome = (event) => {
    this.setState({
      activeProp: {}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={this.callForBadHelp}
          />

          {this.state.activeProp === "Proptimus Omega" ?
          <>
            <p className="">Will this do, human?</p>
            <Proptimus photo={this.state.proptimusPhotos["Proptimus Omega"]} catchPhrase="I'm here to save the day!" callForBetterHelp={this.callForBetterHelp}/>
          </>
          : false
          }
          {this.state.activeProp === "Proptimus Beta" ?
          <>
            <p className="">Will this do, human?</p>
            <ProptimusBeta photo={this.state.proptimusPhotos["Proptimus Beta"]} catchPhrase="We're doing it!" gimmeAllYouGot={this.gimmeAllYouGot}/>
          </>
          : false
          }
          {this.state.activeProp === "Proptimus Prime" ?
          <>
            <p className="">Will this do, human?</p>
            <ProptimusPrime photo={this.state.proptimusPhotos["Proptimus Prime"]} catchPhrase="Last shot!" sendThemHome={this.sendThemHome}/>
          </>
          : false
          }

        </header>
      </div>
    );
  }
}

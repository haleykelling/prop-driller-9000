import React from 'react';

export default class ProptimusBeta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  render() {
    console.log(this.props)
    return(
      <section>
        <img
          src={this.props.photo}
          className="App-logo"
          alt="logo"
          onClick={this.props.gimmeAllYouGot}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
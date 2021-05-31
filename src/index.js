import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { lat: null, errorMessage: "" };
  // window.navigator.geolocation.getCurrentPosition(
  //   (pos) => {
  //     this.setState({ lat: pos.coords.latitude });
  //   },
  //   (err) => {
  //     this.setState({ errorMessage: err.message });
  //   }
  // );
  //   }
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    console.log("My comp rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("My comp was just updated-- it rerendered");
  }
  //Called a helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    );
  }
  render() {
    // return (
    //   <div>
    //     Latitude:{this.state.lat}
    //     <br />
    //     Error: {this.state.errorMessage}
    //   </div>
    // if (this.state.errorMessage && !this.state.lat) {
    //   return <div>Error: {this.state.errorMessage}</div>;
    // }
    // if (!this.state.errorMessage && this.state.lat) {
    //   return <SeasonDisplay lat={this.state.lat} />;
    // }
    // return (
    //   <div>
    //     <Spinner message="Please accept location request" />
    //   </div>
    // );
    // );
    return(
        <div>
            {this.renderContent()}
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

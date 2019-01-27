import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./DemoUi.css";
class DemoUi extends Component {
  constructor(props) {
    super(props);
    this.state = { showAnotherBtn: false };
  }
  onBtnClick = e => {
    this.setState({ showAnotherBtn: !this.state.showAnotherBtn });
  };
  render() {
    return (
      <div>
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            onClick={e => {
              this.onBtnClick(e);
            }}
          >
            Click me
          </Button>
          {this.state.showAnotherBtn ? (
            <Button variant="contained" color="primary">
              I was hidden
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default DemoUi;

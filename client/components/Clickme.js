import React from 'react';
import { connect } from "react-redux";
import clickmeAction from "../actions/clickmeAction";

class Clickme extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();

    this.props.clickmeAction();
  }

  render() {
    return (
      <div>
        <h3>Clickme</h3>
        <a onClick={this.onClick}>Click me</a>
      </div>
    );
  }
}

export default connect(null, { clickmeAction })(Clickme);

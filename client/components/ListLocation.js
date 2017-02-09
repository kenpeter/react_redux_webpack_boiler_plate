import React from 'react';
import { connect } from "react-redux";

class ListLocation extends React.Component {
  render() {
    console.log("--- ListLocation, render ---");    
  
    return (
      <div>
        <h3>list locations</h3>
        {this.props.propTitle}
      </div>
    );
  }
}

function mapStateToProps(state) {

  //test
  console.log("--- mapStateToProps ---");
  console.log(state);

  return {
    propTitle: state.clickme.title
  };
}

export default connect(mapStateToProps, {  })(ListLocation);

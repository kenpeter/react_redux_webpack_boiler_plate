import React from 'react';
import { connect } from "react-redux";

class ListLocation extends React.Component {


  render() {
    console.log("--- ListLocation, render ---");    
  
    return (
      <div>
        <h3>list locations</h3>
      </div>
    );
  }
}


function mapStateToProps(state) {

  //test
  console.log("--- ListLocation.js, mapStateToProps ---");

  return {
    propFavArr: state.toggleFavLocation.favArr
  };
}

export default connect(mapStateToProps, {  })(ListLocation);

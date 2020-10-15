// This is main SmartComponent containing all the display logic of rendering.

import React, { Component } from "react";
import collageData from "./collegesData.json";
import CollageCard from "./CollageCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import "./smartComponentMain.css";

export default class SmartComponentMain extends Component {
  constructor(props) {
    super();
    this.state = {
      data: this.allData.slice(0, 10),
      index: 10,
      difference: 10,
    };
    this.appendingDataFunction = this.appendingDataFunction.bind(this);
  }

  //   This variable contains all the data coming from json
  allData = collageData["colleges"];

  //   Function appending new data with previous data when scroller reaches bottom
  appendingDataFunction() {
    this.setState({
      data: this.state.data.concat(
        this.allData.slice(this.state.index, this.state.index + this.state.difference)
      ),
      index: this.state.index + this.state.difference,
    });
  }

  render() {
    // Mapping each instance of data to the card
    var dataToRender = this.state.data.map((i) => <CollageCard data={i} />);
    return (
      <InfiniteScroll
        dataLength={this.state.data.length}
        hasMore={true}
        next={this.appendingDataFunction}
      >
        <div className="layoutContainerStyle">{dataToRender}</div>
      </InfiniteScroll>
    );
  }
}

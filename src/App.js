import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor

  state = {
    color: "black",
    fontSize: 12,
    fontFamily: "monospace",
    allowEdit: "true"
  }


  // updateColor
  updateColor = (newColor) => {
    this.setState({color: newColor})
  }

  // updateSize
  updateSize = (newSize) => {
    this.setState({fontSize: newSize})
  }

  // updateFamily
  updateFamily = (family) => {
    this.setState({fontFamily: family})
  }

  // updateEditStatus
  updateEditStatus = (canEdit) => {
    this.setState({allowEdit: canEdit})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus={this.updateEditStatus} allowEdit={this.state.allowEdit} />
          <ColorChanger updateColor={this.updateColor} color={this.state.color} allowEdit={this.state.allowEdit}/>
          <SizeChanger updateSize={this.updateSize} fontSize={this.state.fontSize} allowEdit={this.state.allowEdit}/>
          <FamilyChanger updateFamily={this.updateFamily} fontFamily={this.state.fontFamily} allowEdit={this.state.allowEdit}/>
        </div>
        <div className="textArea">
        <TextContainer color={this.state.color} fontSize={this.state.fontSize} fontFamily={this.state.fontFamily}/>
        </div>
      </div>
    );
  }
}

export default App;

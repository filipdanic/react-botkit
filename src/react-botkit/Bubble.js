import React, { Component } from 'react';

class Bubble extends Component {

  render() {
    const { message, author } = this.props;
    const { contents } = message;
    const { showName = false, avatar, position, name, color, background, fontColor } = author;
    return (
      <div>
        <li className="conversation-list--item" style={{ background, color, float: position }}>
          {contents}
        </li>
        <div style={{ clear: 'both' }}>
        </div>
      </div>
    );
  }
}

export default Bubble;

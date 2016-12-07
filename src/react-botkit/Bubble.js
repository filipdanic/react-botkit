import React, { Component } from 'react';
import defaults from './defaults.js';
import { Author} from './types.js';

class Bubble extends Component {

  static propTypes = {
    author: Author,
  };

  render() {
    const { message, author } = this.props;
    const { contents } = message;
    const {
      showName = defaults.showName,
      avatar = defaults.avatar,
      position = defaults.position,
      name = defaults.name,
      color = defaults.color,
      background = defaults.background,
    } = author;
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

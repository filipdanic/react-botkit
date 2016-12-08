import React, { Component } from 'react';
import defaults from './defaults.js';
import { Author} from './types.js';

class Bubble extends Component {

  static propTypes = {
    author: Author.isRequired,
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
    const itemAnimation = 'item_slide_in_up';
    const itemClassName = `conversation_list_item--${position} ${itemAnimation}`;
    return (
      <div>
        <li className={itemClassName} style={{ background, color, float: position }}>
          {contents}
        </li>
        <div style={{ clear: 'both' }}>
        </div>
      </div>
    );
  }
}

export default Bubble;

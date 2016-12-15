/**
 * @fileoverview The <Bubble /> component renders a single message in the conversation thread.
 */

import React, { Component } from 'react';
import defaults from './defaults.js';
import { Author, Message, BubbleCSSClasses } from './types.js';

class Bubble extends Component {

  static propTypes = {
    author: Author.isRequired,
    message: Message.isRequired,
    cssClasses: BubbleCSSClasses,
  };

  render() {
    const { message, author, cssClasses } = this.props;
    const { contents } = message;
    const {
      // showName = defaults.showName,
      // avatar = defaults.avatar,
      position = defaults.position,
      // name = defaults.name,
      color = defaults.color,
      background = defaults.background,
    } = author;
    // TODO: add support for more animations
    // const itemAnimation = 'item_slide_in_up';
    const itemClassName = `${position === 'left' ? cssClasses.left : cssClasses.right} item_slide_in_up`;
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

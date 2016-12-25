/**
 * @fileoverview Type definitions for React PropTypes.
 */
import { PropTypes } from 'react';

/**
 * Unique key [number, string] used to indentify an author.
 * @typedef {(string|number)} ObjectKey
*/
export const ObjectKey = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

/**
 * The shape of the Message that’s displayed in the <Bubble /> component.
 * @typedef {Object} Message
 * @property {string} type - the type of contents, only "message" for now.
 * @property {*} contents - the contnets of the message. Can be a string, an HTML element, React component etc.
 * @property {ObjectKey} author - the author key for style reference.
 * @property {number} delay - the ammount of delay in miliseconds before the message appears.
*/
export const Message = PropTypes.shape({
  type: PropTypes.string.isRequired,
  contents: PropTypes.any.isRequired,
  author: ObjectKey.isRequired,
  delay: PropTypes.number,
});

/**
 * List of Messages, handled by <Conversation /> component.
 * @typedef {[Message]} Messages
*/
export const Messages = PropTypes.arrayOf(Message).isRequired;

/**
 * Author object, used to style a Message in the <Bubble /> component.
 * @typedef {Object} Author
 * @property {string} background - the color of the author’s chat bubbles. Can be in hex, rgb, and rgba formats.
 * @property {string} color - same as @background, but used for font color.
 * @property {string} position - "left" or "right" to determine the position of the Bubble.
*/
export const Author = PropTypes.shape({
  background: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']),
});

/**
 * Thread Settings object. Used to define global settings in the Conversation component.
 * @typedef {Object} ThreadSettings
 * @property {string} skin - the general style of the thread.
 * @property {bool} simulateChat - if true, it will simulate the chat. If false, it works like an archive that renders all the Bubbles right away.
 * @property {bool} allowReplay - if true, it will show a replay button at the end of the chat.
 * @property {string} replayButtonClassName - can be used to override CSS class name that wraps the replay button with
 * @property {*} replayButtonLabel - can be used to override the reply button label
*/
export const ThreadSettings = PropTypes.shape({
  skin: PropTypes.string,
  simulateChat: PropTypes.bool,
  allowReplay: PropTypes.bool,
  replayButtonClassName: PropTypes.string,
  replayButtonLabel: PropTypes.any,
});

/**
 * Specifices the CSS classes of the Bubble component.
 * @typedef {Object}
 * @property {string} left  - the name of the class for left-aligned chat bubbles.
 * @property {string} right - the name of the class for right-aligned chat bubbles.
*/
export const BubbleCSSClasses = PropTypes.shape({
  left: PropTypes.string,
  right: PropTypes.string,
});

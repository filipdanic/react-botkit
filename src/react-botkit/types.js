/**
 * @fileoverview Type definitions for React PropTypes.
 */
import { PropTypes } from 'react';

/**
 * Unique key [number, string] used to indentify an author.
*/
export const ObjectKey = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

/**
 * The shape of the Message that’s displayed in the <Bubble /> component.
  * type {string}, the type of contents, only "message" for now.
  * contents {any}, the contnets of the message. Can be a string, an HTML element, React component etc.
  * author {ObjectKey}, the author key for style reference.
  * delay {number}, the ammount of delay in miliseconds before the message appears.
*/
export const Message = PropTypes.shape({
  type: PropTypes.string.isRequired,
  contents: PropTypes.any.isRequired,
  author: ObjectKey.isRequired,
  delay: PropTypes.number,
});

/**
 * List of Messages, handled by <Conversation /> component.
*/
export const Messages = PropTypes.arrayOf(Message).isRequired;

/**
 * Author object, used to style a Message in the <Bubble /> component.
  * background {string}, the color of the author’s chat bubbles. Can be in hex, rgb, and rgba formats.
  * color {string}, same as @background, but used for font color.
  * name {string}, the username of the Author.
  * avatar {string}, the url of the user avatar.
  * showName {bool}, true if author name should be visible in chat.
  * showAvatar {bool}, true if author name should be visible in chat.
  * position {string}, "left" or "right" to determine the position of the Bubble.
*/
export const Author = PropTypes.shape({
  background: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  showName: PropTypes.bool,
  showAvatar: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']),
});

/**
 * Thread Settings object. Used to define global settings in the Conversation component.
  * skin {string}, the general style of the thread. Only supports Facebook Messenger right now.
  * simulateChat {bool}, if true, it will simulate the chat. If false, it works like an archive that renders all the Bubbles right away.
*/
export const ThreadSettings = PropTypes.shape({
  skin: PropTypes.string,
  simulateChat: PropTypes.bool,
});

/**
 * Specifices the CSS classes of the Bubble component.
  * left {string}, the name of the class for left-aligned chat bubbles.
  * right {string}, the name of the class for right-aligned chat bubbles.
*/
export const BubbleCSSClasses = PropTypes.shape({
  left: PropTypes.string,
  right: PropTypes.string,
});

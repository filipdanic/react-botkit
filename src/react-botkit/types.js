/**
 * @fileoverview Type definitions for React PropTypes.
 */
import { PropTypes } from 'react';

// Unique key [number, string] used to indentify an author.
export const ObjectKey = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

// The shape of the Message that’s displayed in the <Bubble /> component.
export const Message = PropTypes.shape({
  type: PropTypes.string.isRequired,
  contents: PropTypes.any.isRequired,
  author: ObjectKey.isRequired,
  delay: PropTypes.number,
});

// List of Messages, handled by <Conversation /> component.
export const Messages = PropTypes.arrayOf(Message).isRequired;

// Author object, used to style a Message in the <Bubble /> component.
export const Author = PropTypes.shape({
  background: PropTypes.string,
  color: PropTypes.string,
  showName: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
  position: PropTypes.string,
});

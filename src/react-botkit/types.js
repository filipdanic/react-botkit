import { PropTypes } from 'react';

export const ObjectKey = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const Message = PropTypes.shape({
  type: PropTypes.string.isRequired,
  contents: PropTypes.any.isRequired,
  author: ObjectKey.isRequired,
  delay: PropTypes.number,
});

export const Messages = PropTypes.arrayOf(Message).isRequired;

export const Author = PropTypes.shape({
  background: PropTypes.string,
  color: PropTypes.string,
  showName: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
  position: PropTypes.string,
});


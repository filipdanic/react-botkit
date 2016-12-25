import React from 'react';

const SNIPPET = <span>
  And all that was needed was to set <span style={{ color: 'red' }}>`simulateChat`</span> to
  <span style={{ color: 'blue' }}>`false`</span>.
</span>;

export default {
  conversationHash: 'convo-demo-4',
  settings: {
    skin: 'messenger',
    simulateChat: false,
  },
  authors: {
    'human': {
      background: '#0084ff',
      color: '#fff',
      position: 'right',
    },
    'bot-1': {
      background: '#f1f0f0',
      color: '#000',
      position: 'left',
    },
    'bot-2': {
      background: '#f03d25',
      color: '#fff',
      position: 'right',
    },
  },
  messages: [
    {
      type: 'message',
      contents: 'Hello!',
      author: 'human',
    },
    {
      type: 'message',
      contents: 'Hi there!',
      author: 'bot-1',
    },
    {
      type: 'message',
      contents: 'Archive mode is useful for non-presentation purposes!',
      author: 'bot-1',
    },
    {
      type: 'message',
      contents: 'You can still do the same things as in “live mode”',
      author: 'bot-2',
    },
    {
      type: 'message',
      contents: SNIPPET,
      author: 'bot-1',
    },
  ],
};

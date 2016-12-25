const humanDelay = 2500;
const botDelay = 1400;

export default {
  conversationHash: 'convo-demo-5',
  settings: {
    skin: 'messenger',
  },
  authors: {
    'human-1': {
      background: '#0084ff',
      color: '#fff',
      position: 'right',
    },
    'human-2': {
      background: '#e67e22',
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
      position: 'left',
    },
    'bot-3': {
      background: '#2ecc71',
      color: '#fff',
      position: 'left',
    },
    'bot-4': {
      background: '#9b59b6',
      color: '#fff',
      position: 'left',
    },
  },
  messages: [
    {
      type: 'message',
      contents: 'Oh, hi all! Roll call!',
      author: 'human-1',
      delay: humanDelay,
    },
    {
      type: 'message',
      contents: 'Bot #1 Reporting In!',
      author: 'bot-1',
      delay: botDelay,
    },
    {
      type: 'message',
      contents: 'Bot #2 Reporting In!',
      author: 'bot-2',
      delay: botDelay,
    },
    {
      type: 'message',
      contents: 'Bot #3 Reporting In!',
      author: 'bot-3',
      delay: botDelay,
    },
    {
      type: 'message',
      contents: 'Bot #4 Reporting In!',
      author: 'bot-4',
      delay: botDelay,
    },
    {
      type: 'message',
      contents: 'Another human here!',
      author: 'human-2',
      delay: humanDelay,
    },
    {
      type: 'message',
      contents: 'Great stuff!',
      author: 'human-1',
      delay: humanDelay,
    },
  ],
};

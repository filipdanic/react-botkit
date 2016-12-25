const userTypingInterval = 3000;
const botTypingInterval = 2000;

export default {
  conversationHash: 'convo-demo-2',
  settings: {
    skin: 'messenger',
    simulateChat: true,
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
  },
  messages: [
    {
      type: 'message',
      contents: 'Repeat: Hello! 👋',
      author: 'human',
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Hello! 👋',
      author: 'bot-1',
      delay: botTypingInterval,
    },
  ],
};

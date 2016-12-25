const userTypingInterval = 3000;
const botTypingInterval = 1700;

export default {
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
      position: 'left',
    },
  },
  messages: [
    {
      type: 'message',
      contents: 'Hello, nice to meet you! 👋',
      author: 'human',
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Nice to meet you too! I’m React BotKit! 🤖',
      author: 'bot-1',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Awesome! My name is Mark. 👱 This looks so fluid!',
      author: 'human',
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Yeah, pretty neat huh? ⭐️',
      author: 'bot-1',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'You can adjust the length of these delays easily.',
      author: 'bot-1',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'As well as a the colors, photos and stuff. Just edit a JSON and run!',
      author: 'bot-1',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Oh and…',
      author: 'bot-2',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'add as many conversation agents as you want! 🍻',
      author: 'bot-2',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Yeah, pretty neat! Cheers! 🍻',
      author: 'human',
      delay: userTypingInterval,
    },
  ],
};

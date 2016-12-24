const userTypingInterval = 3000;
const botTypingInterval = 1700;

export default {
  settings: {
    skin: 'messenger',
    simulateChat: true,
  },
  authors: {
    '3ba34f4d-8c6e': {
      background: '#0084ff',
      color: '#fff',
      position: 'right',
    },
    '79b2abc1-5a72': {
      background: '#f1f0f0',
      color: '#000',
      position: 'left',
    },
    'ccffa39f-2ba2': {
      background: '#f03d25',
      color: '#fff',
      position: 'left',
    },
  },
  messages: [
    {
      type: 'message',
      contents: 'Hello, nice to meet you! 👋',
      author: '3ba34f4d-8c6e',
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Nice to meet you too! I’m React BotKit! 🤖',
      author: '79b2abc1-5a72',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Awesome! My name is Mark. 👱 This looks so fluid!',
      author: '3ba34f4d-8c6e',
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Yeah, pretty neat huh? ⭐️',
      author: '79b2abc1-5a72',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'You can adjust the length of these delays easily.',
      author: '79b2abc1-5a72',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'As well as a the colors, photos and stuff. Just edit a JSON and run!',
      author: '79b2abc1-5a72',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Oh and…',
      author: 'ccffa39f-2ba2',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'add as many conversation agents as you want! 🍻',
      author: 'ccffa39f-2ba2',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Yeah, pretty neat! Cheers! 🍻',
      author: '3ba34f4d-8c6e',
      delay: userTypingInterval,
    },
  ],
};

const userTypingInterval = 3000;
const botTypingInterval = userTypingInterval / 2;

export default {
  authors: {
    1: {
      background: '#0084ff',
      color: '#fff',
      showName: false,
      name: '',
      avatar: '',
      position: 'right',
    },
    2: {
      background: '#f1f0f0',
      color: '#000',
      showName: true,
      name: 'React BotKit',
      avatar: '',
      position: 'left',
    }
  },
  messages: [
    {
      type: 'message',
      contents: 'Hello, nice to meet you! 👋',
      author: 1,
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Nice to meet you too! I’m React BotKit! 🤖',
      author: 2,
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'Awesome! My name is Mark. 👱 This looks so fluid!',
      author: 1,
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Yeah, pretty neat huh? ⭐️',
      author: 2,
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'You can adjust the length of these delays easily.',
      author: 2,
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'As well as a the colors, photos and stuff. Just edit a JSON and run!',
      author: 2,
      delay: botTypingInterval,
    },
  ],
};

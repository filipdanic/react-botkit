import React from 'react';
const userTypingInterval = 3000;
const botTypingInterval = 2000;

const GIF = <img src="https://media.giphy.com/media/daUOBsa1OztxC/giphy.gif" alt="jake from AT" style={{ height: 150 }} />
const CTA = <span>
  So… <strong><a href="https://github.com/filipdanic/react-botkit" target="_blank">get started!</a></strong>
</span>;


export default {
  conversationHash: 'convo-demo-1',
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
      contents: GIF,
      author: 'human',
      delay: userTypingInterval,
    },
    {
      type: 'message',
      contents: 'Awesome! My name is Mark. 👱 This looks nice!',
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
      contents: 'You can adjust: delays, colors, include GIFs, React components, HTML, forms, photos etc.',
      author: 'bot-1',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: 'also, add as many “people” as you need! 🍻',
      author: 'bot-2',
      delay: botTypingInterval,
    },
    {
      type: 'message',
      contents: CTA,
      author: 'bot-1',
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

import React from 'react';

const humanDelay = 4000;
const botDelay1 = 1350;
const botDelay2 = 2000;
const botDelay3 = 2250;

const MONEY_GIF = <img src="https://media.giphy.com/media/3oz8xR9wKr8TaazlQc/source.gif" style={{ height: 150 }} alt="money gif" />;

export default {
  conversationHash: 'convo-demo-6',
  settings: {
    skin: 'messenger',
  },
  authors: {
    'human': {
      background: '#0084ff',
      color: '#fff',
      position: 'right',
    },
    'bot': {
      background: '#f1f0f0',
      color: '#000',
      position: 'left',
    },
  },
  messages: [
    {
      type: 'message',
      contents: 'Hi, BotKit! What’s my account balance?',
      author: 'human',
      delay: humanDelay,
    },
    {
      type: 'message',
      contents: 'Hey, Mark! Let me check real quick! 👍',
      author: 'bot',
      delay: botDelay2,
    },
    {
      type: 'message',
      contents: 'Wow, look at that!',
      author: 'bot',
      delay: botDelay2,
    },
    {
      type: 'message',
      contents: 'Your balance is: US$ 13,991.00! 💰 Great job, that’s a 25% increase from last month.',
      author: 'bot',
      delay: botDelay1,
    },
    {
      type: 'message',
      contents: MONEY_GIF,
      author: 'bot',
      delay: botDelay1,
    },
    {
      type: 'message',
      contents: 'thanks!',
      author: 'human',
      delay: humanDelay,
    },
    {
      type: 'message',
      contents: 'No problem, Mark!',
      author: 'bot',
      delay: botDelay1,
    },
    {
      type: 'message',
      contents: 'By the way, you’re paying for Netflix each month, but your last sign in was 27 days ago?',
      author: 'bot',
      delay: botDelay3,
    },
    {
      type: 'message',
      contents: 'Want me to cancel that?',
      author: 'bot',
      delay: botDelay1,
    },
    {
      type: 'message',
      contents: 'Nah, I plan to watch some stuff over the weekend.',
      author: 'human',
      delay: humanDelay
    },
    {
      type: 'message',
      contents: 'Anything else you found?',
      author: 'human',
      delay: humanDelay
    },
    {
      type: 'message',
      contents: 'Hmm… It seems your mobile contract is going to expire soon. Do you want to review your options?',
      author: 'bot',
      delay: botDelay2
    },
    {
      type: 'message',
      contents: 'Not now. Remind me tomorrow at 8 pm.',
      author: 'human',
      delay: humanDelay
    },
    {
      type: 'message',
      contents: 'Sure thing!',
      author: 'bot',
      delay: botDelay1
    },
  ],
};

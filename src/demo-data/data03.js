import React from 'react';
const speed = 1500;

const GIF = <img src="https://media.giphy.com/media/D4FZXy64fpoek/giphy.gif" alt="a cat gif" style={{ height: 150 }} />;
const STYLED = <span>
  This is all thanks to <a href="https://jsx.github.io/" target="_blank">JSX</a> and
  React being <strong>awesome.</strong>
</span>;
const FORM = <div>
  <label>
    What’s your name? <br/>
    <input type="text" placeholder="I am an input field!" />
  </label>
  <button>Awesome!</button>
</div>;
const CTA = <span>
  So… <strong><a href="https://github.com/filipdanic/react-botkit" target="_blank">get started!</a></strong>
</span>;


export default {
  conversationHash: 'convo-demo-3',
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
      contents: 'Hit me with a GIF!',
      author: 'human',
      delay: speed,
    },
    {
      type: 'message',
      contents: GIF,
      author: 'bot-1',
      delay: speed,
    },
    {
      type: 'message',
      contents: STYLED,
      author: 'bot-1',
      delay: speed
    },
    {
      type: 'message',
      contents: 'So… I could also add a form?',
      author: 'human',
      delay: speed,
    },
    {
      type: 'message',
      contents: FORM,
      author: 'bot-1',
      delay: speed
    },
    {
      type: 'message',
      contents: 'Neat! 🙌',
      author: 'human',
      delay: speed,
    },
    {
      type: 'message',
      contents: 'You can add anything that React can usually render: strings, other components, JSX/HTML objects etc.',
      author: 'bot-1',
      delay: speed
    },
    {
      type: 'message',
      contents: CTA,
      author: 'bot-1',
      delay: speed
    },
  ],
};

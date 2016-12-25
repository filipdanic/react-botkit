# Props and PropTypes

The <Conversation /> component accepts one prop (`thread`) which contains all of the data.

This is how this prop is defined:

```javascript
    thread: PropTypes.shape({
      conversationHash: PropTypes.string.isRequired,
      authors: PropTypes.object.isRequired,
      messages: Messages.isRequired,
      settings: ThreadSettings.isRequired,
    }),
```

Let’s break down all 4 of these properties.

## conversationHash

The prop `conversationHash` is a String, and it is required. This is a unique identifier of your conversation component.

You dont’t need to worry about this too much, just set it to something such as `"my-conversation-1"`.

If you plan on doing more advanced things, such as dynamically switching the `thread` prop (see `App.js`) to display various conversations, then you will have to update the `conversationHash` to get the component to update.


## settings

The `settings` prop contains global settings for the chat. All of the props here are optional and have their default values.

Here is an overview:

- `skin` {string}  - the general style of the thread. Default is “messenger”.
  - If you want your own custom CSS classes, pass your custom `skin` prop. See this example.
- `simulateChat` {bool} - if true, it will simulate the chat. If false, it works like an archive that renders all the Bubbles right away.
- `allowReplay` {bool} - if true, it will show a replay button at the end of the chat.
- `replayButtonClassName` {string} - can be used to override CSS class name that wraps the replay button
- `replayButtonLabel` {*} - can be used to override the reply button label


## authors

The `authors` prop is a hash map of made of `Author` objects.

It can look like this for example:

```javascript
  authors: {
    'mark': {
      background: '#0084ff',
      color: '#fff',
      position: 'right',
    },
    'julia': {
      background: '#f1f0f0',
      color: '#000',
      position: 'left',
    },
  }
```

These are the props in the Author object:
- background {string}, the color of the author’s chat bubbles. Can be in hex, rgb, and rgba formats.
- color {string}, same as @background, but used for font color.
- position {string}, "left" or "right" to determine the position of the Bubble.

## messages

Finally, the `messages` prop contains all of the messages that will be displayed in the <Bubble /> component.

It is an array of `Message` objects. Here are all the props that his object accepts:

 - type {string} - the type of contents, only `"message"` for now.
 - contents {*} - the contnets of the message. Can be a string, an HTML element, React component etc.
 - author {ObjectKey} - the author key for style reference.
 - delay {number} - the ammount of delay in miliseconds before the message appears.

Here is a full example:

```javascript
  messages: [
    {
      type: 'message',
      contents: 'yo, mark! 🙌',
      author: 'julia',
      delay: 2000,
    },
    {
      type: 'message',
      contents: 'Hi, Julia! 👋',
      author: 'mark',
      delay: botTypingInterval,
    },
  ],
```

## Examples

There are a lot of examples of what you can create.

[Check it out!](https://github.com/filipdanic/react-botkit/tree/master/src/demo-data)

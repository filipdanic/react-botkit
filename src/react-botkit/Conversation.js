/**
 * @fileoverview
 * This is the <Conversation /> component that renders and delegates the entire conversation thread.
 */
import React, { Component, PropTypes } from 'react';
import { Messages, ThreadSettings } from './types.js';
import { getReactBotKitCSSClasses } from './utils.js';
import defaults from './defaults.js';
import Bubble from './Bubble.js';
import './react-botkit.css';

/**
 * Helper to generate a typing indicator for the render() method of <Conversation />.
 * @param {string} backgroundColor
 * @returns {Object}
 */
export const typingIndicatorComponent = (backgroundColor = "#fff") => (
  <div className="typing_wrapper">
      <div className="typing_dot" style={{backgroundColor}}></div>
      <div className="typing_dot" style={{backgroundColor}}></div>
      <div className="typing_dot" style={{backgroundColor}}></div>
  </div>
);

class Conversation extends Component {

  constructor(props) {
    super(props);
    const { thread } = props;
    const { settings } = thread;
    this._botKitCSSClasses = getReactBotKitCSSClasses(settings.skin);
    this.state = {
      messages: [],
    };
  }

  static propTypes = {
    thread: PropTypes.shape({
      conversationHash: PropTypes.string.isRequired,
      authors: PropTypes.object.isRequired,
      messages: Messages.isRequired,
      settings: ThreadSettings.isRequired,
    }),
  }

  componentDidMount() {
    // start adding messages to the message stack
    this.playConversation();
  }

  componentWillUnmount() {
    if (this._mainTimeout) {
      clearTimeout(this._mainTimeout);
    }
  }

  /**
   * Check if the conversation hash has changed.
   * This happens when we switch-out props with a new conversation.
   * If the hashes are changed, we reset the internal state of the component.
   * @param {Object} nextProps
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps) {
    if (nextProps.thread.conversationHash !== this.props.thread.conversationHash) {
      if (this._mainTimeout) {
        clearTimeout(this._mainTimeout);
      }
      this.setState({ messages: [] });
    }
    return true;
  }
  /**
   * If the conversation hash has changed between component updates, we need to call playConversation().
   * @param {Object} prevProps
   */
  componentDidUpdate(prevProps) {
    if (
        prevProps && this.props
        && this.props.thread
        && prevProps.thread
        && this.props.thread.conversationHash !== prevProps.thread.conversationHash
      ) {
      this.playConversation();
    }
  }

  render() {
    const {
      authors,
      messages: messagesSource,
      settings,
    } = this.props.thread;

    // load thread settings
    const {
      simulateChat = defaults.simulateChat,
      allowReplay = defaults.allowReplay,
      replayButtonClassName = defaults.replayButtonClassName,
      replayButtonLabel = defaults.replayButtonLabel
    } = settings;

    // load local messages stack
    const { messages } = this.state;

    // assign classes based on skin, custom css, typing mode etc.
    const { main, bubble } = this._botKitCSSClasses;
    const displayTypingIndicator = messages.length < messagesSource.length;
    const messageCopyRef = messagesSource[messages.length];
    const typingMessage = displayTypingIndicator ?
      Object.assign(
        {},
        messageCopyRef,
        { contents: typingIndicatorComponent(authors[messageCopyRef.author].color)
      }) : undefined;

    return (
      <div>
        <ul className={main}>
          {messages.map((msg, index) =>  {
              return <Bubble key={`${msg.contents}--${index}`} cssClasses={bubble} message={msg} author={authors[msg.author]} />;
            })}
          {displayTypingIndicator ?
            <Bubble shouldScroll={simulateChat} key={typingMessage.contents} cssClasses={bubble} message={typingMessage} author={authors[typingMessage.author]} />
            : null}
        </ul>
          {simulateChat && messagesSource.length === messages.length && allowReplay ?
            <div onClick={this.playConversation.bind(this)} className={replayButtonClassName}>{replayButtonLabel}</div>
            : null}
      </div>
    );
  }

  /**
   * Initiates the rendering of the conversation. Called on componentDidMount and when replay button is clicked.
   */
  playConversation() {
    const { thread } = this.props;
    const { settings } = thread || {};
    const { simulateChat = defaults.simulateChat } = settings;
    this.addToStack(thread.messages, simulateChat, true);
  }

  /**
   * Given the previous stack (array of messages), takes 1 from array, pushes it to the conversation thread.
   * If the Array is still not empty, calls addToStack() again with the new Array, after a delay.
   * @param {Array} prevStack
   * @param {boolean} simulateChat
   * @param {boolean} shouldResetState
   */
  addToStack(prevStack, simulateChat, shouldResetState) {
    const messagesOnStack = prevStack.slice(0);
    let { messages } = this.state;
    const nextMessage = messagesOnStack.splice(0, 1)[0];
    if (shouldResetState) {
      messages = [];
    }
    messages.push(nextMessage);
    this.setState({ messages });
    // if @param messagesOnStack is still a non-empty Array, addToStack(messagesOnStack).
    if (messagesOnStack.length > 0) {
      this._mainTimeout = setTimeout(() => {
        this.addToStack(messagesOnStack, simulateChat, false);
      }, simulateChat ? messagesOnStack[0].delay : 0);
    }
  }
}

export default Conversation;

/**
 * @fileoverview Provides a list of default values for various propTypes.
 */

/**
 * @typedef
 * @property {string} position
 * @property {string} color
 * @property {string} background
 * @property {string} skin
 * @property {boolean} simulateChat
 * @property {boolean} allowReplay
 * @property {string} replayButtonClassName
 * @property {string} replayButtonLabel
 */
export default {
  position: 'right',
  color: '#fff',
  background: '#0084ff',
  skin: 'messenger',
  simulateChat: true,
  allowReplay: true,
  replayButtonClassName: 'conversation_list_replay_button',
  replayButtonLabel: 'Replay Chat',
};

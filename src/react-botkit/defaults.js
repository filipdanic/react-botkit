/**
 * @fileoverview Provides a list of default values for various propTypes.
 */

/**
 * @typedef
 * @property {string} position
 * @property {string} name
 * @property {string} color
 * @property {string} background
 * @property {string|undefined} avatar
 * @property {boolean} showName
 * @property {string} skin
 * @property {boolean} simulateChat
 * @property {boolean} allowReplay
 * @property {string} replayButtonClassName
 * @property {string} replayButtonLabel
 */
export default {
  position: 'right',
  name: '',
  color: '#fff',
  background: '#0084ff',
  avatar: undefined,
  showName: false,
  skin: 'messenger',
  simulateChat: true,
  allowReplay: true,
  replayButtonClassName: 'conversation_list_replay_button',
  replayButtonLabel: 'Replay Chat',
};

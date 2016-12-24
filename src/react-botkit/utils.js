/**
 * @fileoverview Small utility functions are added here.
 */

/**
 * Given a string, returns an object with CSS class names that will be used by botkit components.
 * @param {string} skin
 * @returns {object} with shape = { main: string, bubble: { left: string, right: string } }
 */
export function getReactBotKitCSSClasses(skin) {
  return {
    main: `conversation_list--${skin}`,
    bubble: {
      left: `conversation_list_item--${skin}--left`,
      right: `conversation_list_item--${skin}--right`,
    },
  };
}

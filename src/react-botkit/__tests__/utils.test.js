import { getReactBotKitCSSClasses } from '../utils.js';

const expectedClassNames = {
  main: `conversation_list--custom`,
    bubble: {
      left: `conversation_list_item--custom--left`,
      right: `conversation_list_item--custom--right`,
    },
};

it('returns expected classes', () => {
  const result = getReactBotKitCSSClasses('custom');
  expect(result).toEqual(expectedClassNames);
});

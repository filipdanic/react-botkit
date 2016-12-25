import React from 'react';
import Bubble from '../Bubble.js';
import { getReactBotKitCSSClasses } from '../utils.js';
import { shallow } from 'enzyme';
import sampleThread from '../__data__/testSamples.js';

it('renders without crashing + contains the @prop message.contents inside of <li>', () => {
  const message = sampleThread.messages[0];
  const author = sampleThread.authors['human'];
  const { bubble } = getReactBotKitCSSClasses(sampleThread.settings.skin);
  const bubbleWrapper = shallow(<Bubble shouldScroll={false} message={message} author={author} cssClasses={bubble} />);
  expect(bubbleWrapper.find('li').text()).toEqual(message.contents);
});

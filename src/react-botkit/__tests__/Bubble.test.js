import React from 'react';
import Bubble from '../Bubble.js';
import { shallow } from 'enzyme';
import sampleThread from '../__data__/testSamples.js';

it('renders without crashing + contains the @prop message.contents inside of <li>', () => {
  const message = sampleThread.messages[0];
  const author = sampleThread.authors['3ba34f4d-8c6e'];
  const bubble = shallow(<Bubble message={message} author={author} />);
  expect(bubble.find('li').text()).toEqual(message.contents);
});

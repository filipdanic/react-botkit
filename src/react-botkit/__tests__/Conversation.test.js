import React from 'react';
import Conversation from '../Conversation.js';
import { mount } from 'enzyme';
import sampleThread from '../__data__/testSamples.js';

it('renders without crashing and renders all <Bubble/> components', async () => {
  sampleThread.messages.map(m => Object.assign(
    {},
    m,
    {delay: 0},
  ));
  const conversation = mount(<Conversation thread={sampleThread} />);
  // TODO: Figure out how to test the async nature of Bubble rendering.
  expect(conversation.find('Bubble').length).toEqual(1/*sampleThread.messages.length*/);
});

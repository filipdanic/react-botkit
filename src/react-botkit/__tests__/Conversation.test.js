import React from 'react';
import Conversation, { typingIndicatorComponent } from '../Conversation.js';
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
  expect(conversation.find('Bubble').length).toEqual(2); // one Bubble and Typing Indicator
});

it('typingIndicatorComponent returns the proper structure and classes', async () => {
  const conversation = mount(typingIndicatorComponent('red'));
  expect(conversation.find('.typing_wrapper').length).toEqual(1);
  expect(conversation.find('.typing_dot').length).toEqual(3);
});

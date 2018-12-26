import React from 'react';
import Logo from '../src/Logo';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Example from 'packages/Example';

ComponentsStory.add('Logo', () => (
  <div>
    {withPropsCombinations(
      Logo,
      {
        href: ['ya.ru'],
        square: [true, false],
        style: [{}],
        to: ['ya.ru'],
      },
      {
        CombinationRenderer: data => (
          <Example component={Logo} componentProps={data.props} inline />
        ),
      }
    )()}
  </div>
));

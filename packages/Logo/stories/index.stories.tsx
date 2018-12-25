import React from 'react';
import Logo from '../src/Logo';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

ComponentsStory.add('Logo', () => (
  <div>
    {withPropsCombinations(Logo, {
      href: ['ya.ru'],
      square: [true, false],
      style: [{}],
      to: ['ya.ru'],
    })()}
  </div>
));

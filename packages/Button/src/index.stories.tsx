import React from 'react';
import Button from '../src/Button';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

ComponentsStory.add('Button', () => (
  <div>
    <div style={{ display: 'none' }}>
      <Button>{1}</Button>
    </div>
    {withPropsCombinations(Button, {
      children: ['Button'],
      size: ['small', 'default', 'large', 'big'],
      type: ['primary', 'danger', 'ghost', 'bay', 'sale', 'link'],
    })()}
  </div>
));

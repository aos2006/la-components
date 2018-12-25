import React from 'react';
import Icon from '../src/Icon';
import { ComponentsStory } from 'packages/ComponentsStory';


const context = require.context('../src/icons', true, /\.svg$/);
const NAMES = [];

context.keys().forEach(svgPath => {
  const iconName = svgPath.replace('./', '').replace('.svg', '');
  NAMES.push(iconName);
});

ComponentsStory.add('Icons', () => (
  <div>
    <Icon glyph="arrow-down" title="arrow-down" />
  </div>
));

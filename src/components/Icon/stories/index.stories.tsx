import React from 'react';
import Icon from '../src/Icon';
import { ComponentsStory } from 'components/ComponentsStory';
import { text, number } from '@storybook/addon-knobs';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import CopyToClipboard from 'react-copy-to-clipboard';
import { message } from 'antd';

interface IAllIconProps {}

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

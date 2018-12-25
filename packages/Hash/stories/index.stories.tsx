import React, { CSSProperties } from 'react';
import Hash from '../src/Hash';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

interface HashProps {
  isLink?: boolean;
  className?: string;
  style?: CSSProperties;
  lengthAfter?: number;
  intervalsSpace?: number;
  urlBase?: string;
  children: string;
  copying?: boolean;
}
ComponentsStory.add('Logo', () => (
  <div>
    {withPropsCombinations(Hash, {
      isLink: [true, false],
      className: [''],
      lengthAfter: [1, 2, 3],
      intervalsSpace: [5, 6],
      urlBase: ['ya.ru'],
      children: [null, <span>children</span>],
      copying: [true, false],
    })()}
  </div>
));

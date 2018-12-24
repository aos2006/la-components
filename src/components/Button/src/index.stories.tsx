import React from 'react';
import Button from '../src/Button';
import { ComponentsStory } from 'components/ComponentsStory';
import { text, number } from '@storybook/addon-knobs';
import withPropsCombinations, { withOneOfBool } from 'react-storybook-addon-props-combinations';
const compose = (...fns) => (x) => fns.reduceRight((res, f) => f(res), x);

ComponentsStory.add('Button', () => (
  <div>
    <div style={{ display: 'none' }}>
      <Button>{1}</Button>
    </div>
    {/*{withPropsCombinations(Button, {*/}
    {/*children: ['btn'],*/}
    {/*type: withOneOfBool(['primary', 'danger', 'ghost', 'bay', 'sale', 'link']),*/}
    {/*size: withOneOfBool(['small', 'default', 'large', 'big']),*/}
    {/*shape: withOneOfBool(['circle', 'circle-outline']),*/}
    {/*htmlType: withOneOfBool(['submit', 'button', 'reset']),*/}
    {/*active: withOneOfBool([true, false]),*/}
    {/*icon: withOneOfBool([null, 'circle-plus']),*/}
    {/*block: withOneOfBool([true, false]),*/}
    {/*})()}*/}
    {withPropsCombinations(
      Button,
      {
        children: ['Button'],
		  size: ['small', 'default', 'large', 'big'],
		  type: ['primary', 'danger', 'ghost', 'bay', 'sale', 'link'],
      },
    )()}
  </div>
));

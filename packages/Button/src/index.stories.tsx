import React from 'react';
import Button from '../src/Button';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Example from 'packages/Example';

ComponentsStory.add('Button', () => (
  <div>
    <div style={{ display: 'none' }}>
      <Button>{1}</Button>
    </div>
    {withPropsCombinations(
      Button,
      {
        children: ['Button'],
        size: ['small', 'default', 'large', 'big'],
        type: ['primary', 'danger', 'ghost', 'bay', 'sale', 'link'],
      },
      {
        CombinationRenderer: data => {
          console.log(data);
          return (
            <Example componentProps={data.props} component={Button} inline={true} />
          );
        },
      }
    )()}
  </div>
));

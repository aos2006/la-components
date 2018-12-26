import React from 'react';
import Badge from '../src/Badge';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Example from 'packages/Example';

ComponentsStory.add('Badge', () => (
  <div>
    {withPropsCombinations(
      Badge,
      {
        children: [10, 1000],
      },
      {
        CombinationRenderer: data => {
          return <Example componentProps={data.props} component={Badge} inline={true} />;
        },
      }
    )()}
  </div>
));

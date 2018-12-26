import React from 'react';
import Hash from '../src/Hash';
import { ComponentsStory } from 'packages/ComponentsStory';
import withPropsCombinations from 'react-storybook-addon-props-combinations';
import Example from 'packages/Example';

ComponentsStory.add('Hash', () => (
  <div>
    {withPropsCombinations(
      Hash,
      {
        isLink: [false],
        className: [''],
        lengthAfter: [1, 2, 3],
        intervalsSpace: [5, 6],
        urlBase: ['ya.ru'],
        children: ['0x179357390413f0c669796f92819cfce0a4304db7a14ea79eb8370989674540b'],
        copying: [false],
      },
      {
        CombinationRenderer: data => (
          <Example component={Hash} componentProps={data.props} />
        ),
      }
    )()}
  </div>
));

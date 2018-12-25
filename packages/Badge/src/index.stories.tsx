import React from 'react';
import Badge from '../src/Badge';
import { ComponentsStory } from 'packages/ComponentsStory';

ComponentsStory.add('Badge', () => (
  <div>
    <Badge>{10}</Badge>
    <Badge>{100}</Badge>
  </div>
));

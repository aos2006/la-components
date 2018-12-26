import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { setDefaults } from 'react-storybook-addon-props-combinations';
import JSXAddon from 'storybook-addon-jsx';
import 'highlight.js/styles/dark.css';
import { themes } from '@storybook/components';
import '../packages/services/i18_dev';

setAddon(JSXAddon);


addDecorator(withKnobs);

const newViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1000px',
      height: '963px',
    },
  },
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

configureViewport({
  viewports: newViewports,
});

addDecorator(withNotes);
addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        source: {
          backgroudColor: '#eee',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: '#eee',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
    source: false,
  })
);

// automatically import all files ending in *.stories.js
const req = require.context('../packages', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import React, { Component } from 'react';
import Highlight from 'react-highlight';
import prettyFormat from 'pretty-format';
import styles from './Example.styl';
import cn from 'classnames';
const reactElement = Symbol.for('react.element');

interface IExampleProps {
  componentProps: object;
  component: any;
  inline?: boolean;
}
const transformPreactElement = el => {
  if (!el.preactCompatUpgraded) {
    return el;
  }
  el.props = {
    ...el.attributes,
    children: el.children.map(child => {
      if (child.$$typeof === reactElement) {
        return transformPreactElement(child);
      }
      return child;
    }),
  };
  return el;
};

class Example extends Component<IExampleProps> {
  render() {
    const el = React.createElement(this.props.component, this.props.componentProps);

    return (
      <div
        className={cn(styles.example, {
          [styles.inline]: this.props.inline,
        })}
      >
        <div className={styles.componentWrapper}>{el}</div>
        <div className={styles.hightlight}>
          <Highlight>
            {prettyFormat(transformPreactElement(el), {
              plugins: [prettyFormat.plugins.ReactElement],
            })}
          </Highlight>
        </div>
      </div>
    );
  }
}

export default Example;

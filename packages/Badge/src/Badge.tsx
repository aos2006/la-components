import cn from 'classnames';
import React, { Component } from 'react';
import styles from './Badge.styl';

export interface IBadge {
  className?: string;
}

export default class Badge extends Component<IBadge> {
  render() {
    return (
      <div
        className={cn([
          styles.badge,
          {
            [styles.large]: this.props.children > 99,
          },
          this.props.className,
        ])}
      >
        {this.props.children}
      </div>
    );
  }
}

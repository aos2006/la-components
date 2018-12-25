import cn from 'classnames';
import React, { Component } from 'react';
import styles from './Badge.styl';

export interface IBadgeProps {
  className?: string;
  children?: any;
}

class Badge extends Component<IBadgeProps> {
  static defaultProps: IBadgeProps = {
    className: '',
    children: null,
  };

  render() {
    const { children, className } = this.props;

    return (
      <div
        className={cn([
          styles.badge,
          {
            [styles.large]: children > 99,
          },
          className,
        ])}
      >
        {children}
      </div>
    );
  }
}

export default Badge;

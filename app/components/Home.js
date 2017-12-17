// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Button iconName="refresh">Button</Button>
        </div>
      </div>
    );
  }
}

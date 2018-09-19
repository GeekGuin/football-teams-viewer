import React, { Component } from 'react';
import logo from '../images/logo.svg';
import css from './css/App.css';
import Field from './Field';

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <header className={css.AppHeader}>
          <img src={logo} className={css.AppLogo} alt="logo" />
          <h1 className={css.AppTitle}>Welcome to React</h1>
        </header>
        <Field />
      </div>
    );
  }
}

export default App;

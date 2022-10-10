import React from 'react';
import PropTypes from 'prop-types';
import appStyles from './app.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const messagePropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
});


class App extends React.Component {
    render() {
      return (
        <div className={appStyles.app}>
          <AppHeader />
          <main className={appStyles.main}>
            <BurgerIngredients thread={this.props.thread} />
            <BurgerConstructor thread={this.props.thread} />
          </main>        
        </div>
      );
    }
}

App.propTypes = {
  thread: PropTypes.arrayOf(messagePropTypes).isRequired
};

export default App
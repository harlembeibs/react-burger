import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Scrollbars } from 'react-custom-scrollbars-2';

const messagePropTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
});

const BunCarts = ({ thread }) => {
const buns = thread.filter((item) => item.type === 'bun');
return (
    <>
      {buns.map((item) => {
        return <Cart cart={item} key={item._id} />
      })}
    </>
  )
}

BunCarts.propTypes = {
  thread: PropTypes.arrayOf(messagePropTypes).isRequired
};

const SauceCarts = ({ thread }) => {
  const sauce = thread.filter((item) => item.type === 'sauce');
  return (
    <>
      {sauce.map((item) => {
        return <Cart cart={item} key={item._id} />
      })}
    </>
  )
}

SauceCarts.propTypes = {
  thread: PropTypes.arrayOf(messagePropTypes).isRequired
};


const MainCarts = ({ thread }) => {
  const mains = thread.filter((item) => item.type === 'main');
  return (
    <>
      {mains.map((item) => {
        return <Cart cart={item} key={item._id} />
      })}
    </>
  )
}

MainCarts.propTypes = {
  thread: PropTypes.arrayOf(messagePropTypes).isRequired
};

const Cart = ({ cart }) => {
  return (
    <li className={burgerIngredientsStyles.ingredientsCart}>
      <img src={cart.image} alt="Фото ингредиента"/>
      <div className={burgerIngredientsStyles.ingredientsPriceContainer}>
        <span className={burgerIngredientsStyles.ingredientsPrice}>{cart.price}</span>
        <CurrencyIcon />
      </div>
      <figcaption className={burgerIngredientsStyles.ingredientsCaption}>{cart.name}</figcaption>             
    </li>
  );
};


Cart.propTypes = {
  cart: messagePropTypes.isRequired
};



class BurgerIngredients extends React.Component {
  render() {
    return (
      <section className={burgerIngredientsStyles.container}>
        <h1 className={burgerIngredientsStyles.title}>Соберите бургер</h1>
        <div className={burgerIngredientsStyles.tabContainer}>
          <Tab active={true}>
            Булки
          </Tab>
          <Tab>
            Соусы
          </Tab>
          <Tab>
            Начинки
          </Tab>
        </div>
        <Scrollbars className={burgerIngredientsStyles.scrollBar} renderThumbVertical={props => <div {...props} className={burgerIngredientsStyles.thumbVertical}/>}>
          <article className={burgerIngredientsStyles.ingredientsItem}>
            <h2 className={burgerIngredientsStyles.ingredientsItemTitle}>Булки</h2>
            <ul className={burgerIngredientsStyles.ingredientsCartContainer}>
              <BunCarts thread={this.props.thread} />
            </ul>
          </article>
          <article className={burgerIngredientsStyles.ingredientsItem}>
            <h2 className={burgerIngredientsStyles.ingredientsItemTitle}>Соусы</h2>
            <ul className={burgerIngredientsStyles.ingredientsCartContainer}>
              <SauceCarts thread={this.props.thread} />
            </ul>
          </article>
          <article className={burgerIngredientsStyles.ingredientsItem}>
            <h2 className={burgerIngredientsStyles.ingredientsItemTitle}>Начинки</h2>
            <ul className={burgerIngredientsStyles.ingredientsCartContainer}>
              <MainCarts thread={this.props.thread} />
            </ul>
          </article>
          </Scrollbars>
      </section>
    );
  }
}

  
export default BurgerIngredients;
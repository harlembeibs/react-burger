import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Scrollbars } from 'react-custom-scrollbars-2';

const BunCarts = ({ thread }) => {
return (
    <>
      {thread.map((item, index) => {
        if (item.type === 'bun') {
          return <Cart cart={item} key={index} />
        }
      })}
    </>
  )
}

const SauceCarts = ({ thread }) => {
  return (
    <>
      {thread.map((item, index) => {
        if (item.type === 'sauce') {
          return <Cart cart={item} key={index} />
        }
      })}
    </>
  )
}

const MainCarts = ({ thread }) => {
  return (
    <>
      {thread.map((item, index) => {
        if (item.type === 'main') {
          return <Cart cart={item} key={index} />
        }
      })}
    </>
  )
}

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
  image: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string
};



class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={burgerIngredientsStyles.container}>
      <h1 className={burgerIngredientsStyles.title}>Соберите бургер</h1>
      <div style={{ display: 'flex', paddingBottom: 40 }}>
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
      <Scrollbars style={{ width: 600, height: 630}} renderThumbVertical={props => <div {...props} className="thumb-vertical" style={{ backgroundColor: '#8585AD', maxHeight: 664 }}/>}>
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
import React from 'react';
import PropTypes from 'prop-types';
import burgerIngredientsStyles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import dataPropTypes from '../../prop-types/prop-types';

const BunCarts = ({ data }) => {
const buns = data.filter((item) => item.type === 'bun');
return (
    <>
      {buns.map((item) => {
        return <Cart cart={item} key={item._id} />
      })}
    </>
  )
}

BunCarts.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired
};

const SauceCarts = ({ data }) => {
  const sauce = data.filter((item) => item.type === 'sauce');
  return (
    <>
      {sauce.map((item) => {
        return <Cart cart={item} key={item._id} />
      })}
    </>
  )
}

SauceCarts.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired
};


const MainCarts = ({ data }) => {
  const mains = data.filter((item) => item.type === 'main');
  return (
    <>
      {mains.map((item) => {
        return <Cart cart={item} key={item._id} />
      })}
    </>
  )
}

MainCarts.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes).isRequired
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
  cart: dataPropTypes.isRequired
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
              <BunCarts data={this.props.data} />
            </ul>
          </article>
          <article className={burgerIngredientsStyles.ingredientsItem}>
            <h2 className={burgerIngredientsStyles.ingredientsItemTitle}>Соусы</h2>
            <ul className={burgerIngredientsStyles.ingredientsCartContainer}>
              <SauceCarts data={this.props.data} />
            </ul>
          </article>
          <article className={burgerIngredientsStyles.ingredientsItem}>
            <h2 className={burgerIngredientsStyles.ingredientsItemTitle}>Начинки</h2>
            <ul className={burgerIngredientsStyles.ingredientsCartContainer}>
              <MainCarts data={this.props.data} />
            </ul>
          </article>
          </Scrollbars>
      </section>
    );
  }
}

  
export default BurgerIngredients;
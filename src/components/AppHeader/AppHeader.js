import React from 'react';
import AppHeaderStyles from './AppHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
    render() {
      return (
        <header className={AppHeaderStyles.header}>
					<div className={AppHeaderStyles.container}>
						<nav className={AppHeaderStyles.menu}>
							<div className={AppHeaderStyles.menuElem}>
								<BurgerIcon />
								<span className={AppHeaderStyles.menuTriggerText}>Конструктор</span>
							</div>
							<div className={AppHeaderStyles.menuElem}>
								<ListIcon type="secondary"/>
								<span className={AppHeaderStyles.menuTriggerTextDisabled}>Лента заказов</span>
							</div>
						</nav>
						<a className={AppHeaderStyles.logoContainer} href="#">
							<Logo />
						</a>
						<nav className={AppHeaderStyles.menu}>
							<div className={AppHeaderStyles.menuElem}>
								<ProfileIcon type="secondary" />
								<span className={AppHeaderStyles.menuTriggerTextDisabled}>Личный кабинет</span>
							</div>
						</nav>
					</div>
        </header>
      );
    }
  }
  
  export default AppHeader;
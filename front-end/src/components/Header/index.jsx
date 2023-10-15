import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrTextAlignRight } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'

import styles from './style.module.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [menuElement, setMenuElement] = useState(false);

  const mouseEnterItem = () => {
    setIsMouseEnter(true);
  }

  const mouseLeaveItem = () => {
    setIsMouseEnter(false);
  }

  const menuOpenClick = () => {
    setMenuElement(!menuElement);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__top}></div>
        <div className={styles.header__bottom}>
          <NavLink to={'/'}>
            <h1>GreenLife Emporium</h1>
          </NavLink>
          <ul>
            <li>
              <NavLink to={'/search'}>
                <AiOutlineSearch />
              </NavLink>
            </li>
            <li
              onMouseEnter={mouseEnterItem}
              onMouseLeave={mouseLeaveItem}
            >
              <AiOutlineUser />
            </li>
            <li>
              <NavLink to={'/carrinho'}>
                <BiShoppingBag />
              </NavLink>
            </li>
            <li onClick={menuOpenClick}>
              {menuElement ? <AiOutlineClose /> : <GrTextAlignRight />}
            </li>
          </ul>
        </div>
      </header>
      <div className={isMouseEnter ? styles.menu__user : styles.menu__user__disable }               
            onMouseEnter={mouseEnterItem}
            onMouseLeave={mouseLeaveItem}
        >
        <div className={styles.menu__user__container}>
          <NavLink to={'/login'}>Logar-se</NavLink>
          <NavLink to={'/register'}>Registre-se</NavLink>
        </div>
      </div>

      <div className={menuElement ? styles.menu__right : styles.menu__right__disabled}>
        <div>
          <h1>GreenLife | Menu</h1>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/carrinho'}>Carrinho</NavLink>
          <NavLink to={'/login'}>Login</NavLink>
          <NavLink to={'/register'}>Registro</NavLink>
        </div>
      </div>
    </>
  );
}

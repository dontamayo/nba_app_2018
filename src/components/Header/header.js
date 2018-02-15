import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom'

const Header = () => {

  const logo = () => {
    return (
      <Link to="/">
        <img alt="nba logo" src="/images/nba_logo.png"/>
      </Link>

    )
  }
  return(
    <header className={style.header}>
        <div className={style.header.Opt}>
          {logo()}
        </div>
    </header>
  )
}

export default Header;

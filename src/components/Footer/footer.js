import React from 'react';
import styles from './footer.css';
import { Link } from 'react-router-dom';

const footer = () => {
  return(
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img alt="nba logo" src="/images/nba_logo.png"/>
      </Link>
      <div className={styles.right}>
        @NBA 2018 All righs reserved. For more details @@
      </div>
    </div>
  )
}

export default footer;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
              <div className="flex flex-between flex-align">
                <div>
                  <Link to="/">
                    <h3 className="is-marginless">
                      <span className={styles.logo}>S</span>
                      <span style={{ color: 'white'}}>uper Heros</span>
                    </h3>
                  </Link>
                </div>
                <div>
                  <Link to="/favorites" className={styles.navItem}>
                    Favorites
                  </Link>
                  <Link to="/search" className={styles.navItem}>
                    Search
                  </Link>
                </div>
              </div>
            </div>
        </div>
    )
}

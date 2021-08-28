import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

import styles from './HeroItem.module.scss';
import { Appearance } from '../HeroAttributes/Appearance/Appearance';
import { PowerStats } from '../HeroAttributes/PowerStats/PowerStats';

export const HeroItem = props => {
  const { hero, favorite, onFavorite,  } = props;
  return (
    <div
      aria-label="hero-item"
      className={classNames('flex flex-between flex-align', styles.heroItem)}
    >
      <Link to={`/hero/${hero.id}`}>
        <div className={classNames('flex flex-between flex-align')}>
          <div className="flex flex-align flex-1">
            <img aria-label="hero-item-image" className={styles.heroImg} src={hero.image.url} alt={hero.name} />
            <div className={styles.heroInfo}>
              <h2 className="is-marginless" aria-label="hero-item-name">{hero.name}</h2>
              <p className="text-color"><strong>Publisher: </strong> <span>{hero.biography.publisher}</span></p>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.heroAttributes}> 
        <Appearance appearance={hero.appearance} />
        <PowerStats power={hero.powerstats} />
      </div>
      {
        onFavorite && (
          <div className={styles.fav}>
            <FontAwesomeIcon
              aria-label="favorite-icon"
              icon={favorite ? faHeartSolid : faHeartRegular}
              className={classNames('icon-button', {
                favorite: favorite
              })}
              onClick={() => onFavorite(hero.id)}
            />
          </div>
        )
      }

    </div>
  )
}

HeroItem.propTypes = {
  hero: PropTypes.object.isRequired,
  favorite: PropTypes.bool.isRequired,
  onFavorite: PropTypes.func
};

HeroItem.defaultProps = {
  favorite: false,
}

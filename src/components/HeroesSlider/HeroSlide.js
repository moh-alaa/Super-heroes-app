import React from "react";
import { Link } from "react-router-dom";
import { Bio, PowerStats, Appearance } from "../HeroAttributes";
import styles from "./HeroSlider.module.scss";

export const HeroSlide = (props) => {
  const { hero, heroConfig } = props;
  return (
    <div className={styles.slide}>
      <div className={styles.slideImageWrap}>
        <img
          className={styles.slideImage}
          src={hero.image.url}
          alt={hero.name}
        />
      </div>
      <div className={styles.heroInfo}>
        <div className={styles.heroTitle}>
          <Link to={`/hero/${hero.id}`}>{hero.name}</Link>
        </div>
        {heroConfig.bio && <Bio biography={hero.biography} />}
        {heroConfig.appearance && <Appearance appearance={hero.appearance} />}
        {heroConfig.power && <PowerStats power={hero.powerstats} />}
      </div>
      
    </div>
  );
};

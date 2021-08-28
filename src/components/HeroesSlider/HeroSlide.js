import React from "react";
import { Link } from "react-router-dom";
// import { Bio, PowerStats, Appearance } from "../HeroAttributes";
import styles from "./HeroSlider.module.scss";

export const HeroSlide = (props) => {
  const { hero, heroConfig } = props;
  return (
    <div className={styles.slide}>
      <div className={styles.heroInfo}>
        <div className={styles.heroTitle}>
          <Link to={`/hero/${hero.id}`}>{hero.name}</Link>
        </div>
        {/* {heroConfig.bio && <Bio biography={hero.biography} />} */}
      </div>
      <div className={styles.slideImageWrap}>
        <img className={styles.slideImage} src={hero.image.url} />
      </div>
        <div className={styles.heroAttributes}>
          {/* {heroConfig.power && <PowerStats power={hero.powerstats} />} */}
          {/* {heroConfig.appearance && <Appearance appearance={hero.appearance} />} */}
        </div>
    </div>
  );
};

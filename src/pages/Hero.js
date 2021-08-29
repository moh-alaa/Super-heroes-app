import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bio, PowerStats, Appearance } from "../components/HeroAttributes";
import { singleHero } from "../services/fetch-single-hero";

import styles from "./Hero.module.scss";

export default function Hero() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [hero, setHero] = useState();

  useEffect(() => {
    setLoading(true)
    singleHero(id)
        .then(({ success, data }) => {
            if (success) {
                setHero(data)
            }
            setLoading(false)
      })
      .catch(() => setLoading(false))
  }, []);
  
  return (
    <div className="container">
      {loading && <p>Loading Hero...</p>}
      {hero && (
        <div className={styles.heroWrap}> 
          <div className={styles.heroTitle}><h2>{hero.name}</h2></div>
          <div className={styles.heroImage}>
            <img
              src={hero.image.url}
              alt={hero.name}
            />
          </div>

          <div className={styles.heroInfo}>
            <Bio biography={hero.biography} />
            <Appearance appearance={hero.appearance} />
            <PowerStats power={hero.powerstats} />
          </div>
        </div>
      )}
      
    </div>
  );
}

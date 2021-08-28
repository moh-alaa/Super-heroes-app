import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bio, PowerStats, Appearance } from "../components/HeroAttributes";
import { singleHero } from "../services/fetch-single-hero";

import styles from "./Hero.module.scss";

export default function Hero() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [hero, setHero] = useState();
  //   console.log(hero, id)

  useEffect(() => {
    singleHero(id)
      .then((res) => {
        if (res) {
          setHero(res);
        } 
        setLoading(false);
      })
    // fetch(`/api/${id}`)
    //     .then(res => setHero(res.json()))
  });
console.log(hero)
  return (
    <div>
      <div className={styles.heroTitle}>{/* <h2>{hero.name}</h2> */}</div>
      <div className={styles.slideImageWrap}>
        {/* <img
          className={styles.slideImage}
          src={hero.image.url}
          alt={hero.name}
        /> */}
      </div>

      {/* <div className={styles.heroInfo}>
        <Bio biography={hero.biography} />
        <Appearance appearance={hero.appearance} />
        <PowerStats power={hero.powerstats} />
      </div> */}
    </div>
  );
}

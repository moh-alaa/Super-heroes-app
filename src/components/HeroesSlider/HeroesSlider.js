import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import classNames from "classnames";
import { fetchPaginatedHeroes } from "../../services/fetch-paginated-heroes";
import { HeroSlide } from "./HeroSlide";
import styles from "./HeroSlider.module.scss";

const HeroConfigControls = (props) => {
  const { heroConfig, onChange } = props;

  const handleChange = (event) => {
    const { name, checked } = event.target;
    onChange(name, checked);
  };

  return (
    <div className={classNames("flex", styles.heroConfig)}>
      <div className={styles.configTitle}>
        <h3>Carousel Configuration</h3>
      </div>
      <div className={styles.configCheckboxWrap}>
        <div className={styles.configCheckbox}>
          <input
            type="checkbox"
            name="appearance"
            onChange={handleChange}
            checked={heroConfig.appearance}
          />
          <p>Appearance</p>
        </div>
        <div className={styles.configCheckbox}>
          <input
            type="checkbox"
            name="power"
            onChange={handleChange}
            checked={heroConfig.power}
          />
          <p>Power</p>
        </div>
        <div className={styles.configCheckbox}>
          <input
            type="checkbox"
            name="bio"
            onChange={handleChange}
            checked={heroConfig.bio}
          />
          <p>Bio</p>
        </div>
      </div>
    </div>
  );
};

export const HeroesSlider = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [heroConfig, setHeroConfig] = useState({
    bio: true,
    appearance: true,
    power: true,
  });

  const settings = {
    dots: true,
    arrows: false,
    // autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
  };

  useEffect(() => {
    setLoading(true);
    fetchPaginatedHeroes(1, 9).then(({ data, success }) => {
      if (success) {
        setHeroes(data);
      } else {
        setError(true);
      }
      setLoading(false);
    });
  }, []);

  if (error) {
    return (
      <div>
        <p>Something went wrong!</p>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classNames('m-b-32', styles.carouselWrap)}>
      <Slider {...settings}>
        {heroes.map((hero) => {
          return (
            <HeroSlide
              key={`slide-${hero.id}`}
              hero={hero}
              heroConfig={heroConfig}
            />
          );
        })}
      </Slider>
      <HeroConfigControls
        heroConfig={heroConfig}
        onChange={(name, checked) =>
          setHeroConfig(() => {
            return {
              ...heroConfig,
              [name]: checked,
            };
          })
        }
      />
    </div>
  );
};

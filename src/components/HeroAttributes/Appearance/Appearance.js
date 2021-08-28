import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFemale, faMale, faUsers, faWeight, faRulerVertical} from "@fortawesome/free-solid-svg-icons";
import styles from "./Appearance.module.scss";

const AppearanceItem = props => {
  const { label, value, icon } = props;

  return (
    <div className={styles.appearanceAttribute}>
      <div className={styles.appearanceAttributeLabel}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <strong>{value}</strong>
      <span className="tooltip-hidden">{label}</span>
    </div>
  )
};

export const Appearance = props => {
  const { appearance } = props;
  return (
    <div className="flex flex-align m-b-32 flex-wrap justify-center">
      {
        appearance.gender && (
          <AppearanceItem icon={appearance.gender === 'Male' ? faMale : faFemale} label="Gender" value={appearance.gender} />
        )
      }
      {
        appearance.race && (
          <AppearanceItem icon={faUsers} label="Race" value={appearance.race} />
        )
      }
      {
        appearance.height && (
          <AppearanceItem icon={faRulerVertical} label="Height" value={appearance.height[1]} />
        )
      }
      {
        appearance.weight && (
          <AppearanceItem icon={faWeight} label="Weight" value={appearance.weight[1]} />
        )
      }
    </div>
  )
}

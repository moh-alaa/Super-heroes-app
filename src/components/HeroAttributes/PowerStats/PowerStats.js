import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBatteryFull, faBrain, faDumbbell, faFistRaised, faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import styles from "./PowerStats.module.scss";

const PowerStatsItem = props => {
  const { label, value, icon } = props;

  return (
    <div className={styles.powerAttribute}>
      <div className={styles.powerAttributeLabel}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <strong>{value}</strong>
      <span className="tooltip-hidden">{label}</span>
    </div>
  )
};

export const PowerStats = props => {
  const { power } = props;

  return (
    <div className="flex flex-align m-b-32 flex-wrap justify-center">
      {
        power.combat && (
          <PowerStatsItem icon={faFistRaised} label="Combat" value={power.combat} />
        )
      }
      {
        power.durability && (
          <PowerStatsItem icon={faBatteryFull} label="Durability" value={power.durability} />
        )
      }
      {
        power.speed && (
          <PowerStatsItem icon={faTachometerAlt} label="Speed" value={power.speed} />
        )
      }
      {
        power.strength && (
          <PowerStatsItem icon={faDumbbell} label="Strength" value={power.strength} />
        )
      }
      {
        power.intelligence && (
          <PowerStatsItem icon={faBrain} label="Intelligence" value={power.intelligence} />
        )
      }
    </div>
  )
}

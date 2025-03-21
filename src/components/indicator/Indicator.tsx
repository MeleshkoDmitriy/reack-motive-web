import { FC } from "react";
import styles from "./Indicator.module.less";
import { IndicatorColors } from "../../constants/indicators";
import {
  TCharacterGender,
  TCharacterSpecies,
  TCharacterStatus,
} from "../../types/CharacterTypes";

interface IndicatorProps {
  info: TCharacterGender | TCharacterSpecies | TCharacterStatus;
}

export const Indicator: FC<IndicatorProps> = ({ info }) => {
  const color = IndicatorColors[info] || IndicatorColors.unknown;

  return (
    <div style={{ backgroundColor: color }} className={styles.indicator}></div>
  );
};

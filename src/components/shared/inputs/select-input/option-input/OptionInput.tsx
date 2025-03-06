import { FC } from "react";
import styles from "./OptionInput.module.less";
import clsx from "clsx";

interface OptionInputProps {
  value: string;
  handleSelectOption: (value: string) => void;
  selectedValue: string;
}

export const OptionInput: FC<OptionInputProps> = ({
  value,
  handleSelectOption,
  selectedValue,
}) => {
  const optionClasses = clsx(styles.option, {
    [styles.selected]: value === selectedValue,
  })

  return (
    <div className={styles.wrapper} onClick={() => handleSelectOption(value)}>
      <span className={optionClasses}>{value}</span>
    </div>
  );
};

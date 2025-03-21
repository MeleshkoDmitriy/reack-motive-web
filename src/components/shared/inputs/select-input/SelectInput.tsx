import { FC, useRef } from "react";
import styles from "./SelectInput.module.less";
import { OptionInput } from "./option-input/OptionInput";
import clsx from "clsx";
import { DropdownArrow } from "../../../icons";
import { useClickOutside } from "@/reack-motive-web/src/hooks/useClickOutside";

interface SelectInputProps {
  options: string[];
  selectedValue: string;
  handleSelectChange: (value: string) => void;
  isDropdownShown: boolean;
  handleShowDropdown: () => void;
  handleDropdownHide: () => void;
  placeholder?: string;
}

export const SelectInput: FC<SelectInputProps> = ({
  options,
  selectedValue,
  handleSelectChange,
  isDropdownShown,
  handleShowDropdown,
  handleDropdownHide,
  placeholder = "Select option",
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, handleDropdownHide);

  const dropdownClasses = clsx(styles.dropdown, {
    [styles.shownDropdown]: isDropdownShown,
  });

  const valueTitleClasses = clsx(styles.valueTitle, {
    [styles.placeholder]: !selectedValue,
  });

  const valueIconClasses = clsx(styles.valueIcon, {
    [styles.down]: isDropdownShown,
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.value} onClick={handleShowDropdown}>
        <span className={valueTitleClasses}>
          {selectedValue || placeholder}
        </span>
        <DropdownArrow className={valueIconClasses} />
      </div>
      <div className={dropdownClasses} ref={dropdownRef}>
        {options.map((option) => (
          <OptionInput
            value={option}
            handleSelectOption={handleSelectChange}
            selectedValue={selectedValue}
            key={option}
          />
        ))}
      </div>
    </div>
  );
};

import { ChangeEvent, FC } from "react";
import styles from "./TextInput.module.less";
import { CloseIcon, SearchIcon } from "../../../icons";
import clsx from "clsx";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClear?: () => void;
}

export const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = "Enter your text here",
  onClear,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClearInput = () => {
    if (onClear) {
      onClear();
    } else {
      onChange('');
    }
  };

  const closeButtonClasses = clsx(styles.closeButton, {
    [styles.show]: value && value.length > 0,
  });

  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.searchIcon} />
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button className={closeButtonClasses} onClick={handleClearInput}>
        <CloseIcon className={styles.closeIcon} />
      </button>
    </div>
  );
};

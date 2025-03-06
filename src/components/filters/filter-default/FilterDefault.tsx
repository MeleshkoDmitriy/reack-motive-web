import { useCallback, useState } from "react";
import { TextInput, SelectInput } from "../../../components";
import styles from "./FilterDefault.module.less";
import { genderOptions, speciesOptions, statusOptions } from "@/reack-motive-web/src/constants/options";


export const FilterDefault = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSelectChange = useCallback((value: string) => {
    setSelectedValue(value);
    setIsDropdownShown(false);
  }, []);

  const handleShowDropdown = () => {
    setIsDropdownShown(true);
  };

  const handleDropdownHide = () => {
    setIsDropdownShown(false);
  };

  return (
    <div className={styles.wrapper}>
      <TextInput value={searchValue} onChange={handleSearchChange} />
      <SelectInput
        placeholder="Select gender"
        options={genderOptions}
        selectedValue={selectedValue}
        handleSelectChange={handleSelectChange}
        handleShowDropdown={handleShowDropdown}
        isDropdownShown={isDropdownShown}
        handleDropdownHide={handleDropdownHide}
      />
      <SelectInput
        placeholder="Select status"
        options={statusOptions}
        selectedValue={selectedValue}
        handleSelectChange={handleSelectChange}
        handleShowDropdown={handleShowDropdown}
        isDropdownShown={isDropdownShown}
        handleDropdownHide={handleDropdownHide}
      />
      <SelectInput
        placeholder="Select species"
        options={speciesOptions}
        selectedValue={selectedValue}
        handleSelectChange={handleSelectChange}
        handleShowDropdown={handleShowDropdown}
        isDropdownShown={isDropdownShown}
        handleDropdownHide={handleDropdownHide}
      />
    </div>
  );
};

import { useCallback, useState } from "react";
import { TextInput, SelectInput } from "../../../components";
import styles from "./FilterDefault.module.less";
import {
  genderOptions,
  speciesOptions,
  statusOptions,
} from "@/reack-motive-web/src/constants/options";

export const FilterDefault = () => {
  const [filters, setFilters] = useState({
    search: "",
    gender: "",
    status: "",
    species: "",
  });

  const [dropdownVisibility, setDropdownVisibility] = useState({
    gender: false,
    status: false,
    species: false,
  });

  const handleFilterChange = useCallback(
    (key: keyof typeof filters, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      setDropdownVisibility((prev) => ({ ...prev, [key]: false }));
    },
    []
  );

  const handleSearchChange = (value: string) => {
    setFilters((prev) => ({ ...prev, search: value }));
  };

  const handleShowGenderDropdown = () => {
    setDropdownVisibility((prev) => ({ ...prev, gender: true }));
  };

  const handleHideGenderDropdown = () => {
    setDropdownVisibility((prev) => ({ ...prev, gender: false }));
  };

  const handleShowStatusDropdown = () => {
    setDropdownVisibility((prev) => ({ ...prev, status: true }));
  };

  const handleHideStatusDropdown = () => {
    setDropdownVisibility((prev) => ({ ...prev, status: false }));
  };

  const handleShowSpeciesDropdown = () => {
    setDropdownVisibility((prev) => ({ ...prev, species: true }));
  };

  const handleHideSpeciesDropdown = () => {
    setDropdownVisibility((prev) => ({ ...prev, species: false }));
  };

  return (
    <div className={styles.wrapper}>
      <TextInput
        value={filters.search}
        onChange={handleSearchChange}
        placeholder="Search characters"
      />
      <SelectInput
        placeholder="Select gender"
        options={genderOptions}
        selectedValue={filters.gender}
        handleSelectChange={(value) => handleFilterChange("gender", value)}
        handleShowDropdown={handleShowGenderDropdown}
        isDropdownShown={dropdownVisibility.gender}
        handleDropdownHide={handleHideGenderDropdown}
      />
      <SelectInput
        placeholder="Select status"
        options={statusOptions}
        selectedValue={filters.status}
        handleSelectChange={(value) => handleFilterChange("status", value)}
        handleShowDropdown={handleShowStatusDropdown}
        isDropdownShown={dropdownVisibility.status}
        handleDropdownHide={handleHideStatusDropdown}
      />
      <SelectInput
        placeholder="Select species"
        options={speciesOptions}
        selectedValue={filters.species}
        handleSelectChange={(value) => handleFilterChange("species", value)}
        handleShowDropdown={handleShowSpeciesDropdown}
        isDropdownShown={dropdownVisibility.species}
        handleDropdownHide={handleHideSpeciesDropdown}
      />
    </div>
  );
};

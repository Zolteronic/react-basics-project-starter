import { Input } from "@chakra-ui/react";
import { SearchBar } from "./ui/SearchBar";

import { useState } from "react";
export const SearchRecipe = ({ data, onSearch }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [healthLabel, setHealthLabel] = useState("");

  const handleSearch = (searchTerm) => {
    if (data) {
      let newData = data.filter(
        (item) =>
          item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.recipe.healthLabels.some((label) =>
            label.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );

      setFilteredData(newData);
      onSearch(newData);
    }
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
};

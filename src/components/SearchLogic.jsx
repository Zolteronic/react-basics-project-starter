import { useState } from "react";

export const SearchLogic = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return { search, handleSearch };
};

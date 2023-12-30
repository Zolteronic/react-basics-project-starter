import { Flex, Input } from "@chakra-ui/react";
import { SearchLogic } from "../SearchLogic";

export const SearchBar = ({ onSearch }) => {
  const { search, handleSearch } = SearchLogic();

  const handleInputChange = (event) => {
    handleSearch(event);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <Flex justifyContent="center">
      <Input
        placeholder="Search"
        width="30rem"
        variant="filled"
        value={search}
        onChange={handleInputChange}
      />
    </Flex>
  );
};

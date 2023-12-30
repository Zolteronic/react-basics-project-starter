import { RecipeListPage } from "./pages/RecipeListPage";
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { data } from "./utils/data";
import { Box, Heading } from "@chakra-ui/react";
import { SearchRecipe } from "./components/searchRecipe";

export const App = () => {
  const [recipe, setRecipe] = useState();
  const [searchResult, setSearchResult] = useState(data.hits);

  const clickHandler = (index) => {
    setRecipe(searchResult[index]);
  };

  const handleSearch = (newData) => {
    setSearchResult(newData);
  };

  return (
    <Box backgroundColor="#C4DFDF" height="min-content" minHeight="100vh">
      {recipe ? (
        <RecipePage recipe={recipe} onClick={clickHandler} />
      ) : (
        <>
          <Heading size="xl" textAlign="center" p={8} textColor="#4b5b6d">
            Welcome, please select a recipe
          </Heading>
          <SearchRecipe data={data.hits} onSearch={handleSearch} />
          <RecipeListPage data={searchResult} clickHandler={clickHandler} />
        </>
      )}
    </Box>
  );
};

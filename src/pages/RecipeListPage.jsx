import { Flex } from "@chakra-ui/react";
import { RecipeItemCard } from "../components/RecipeItemCard";

export const RecipeListPage = ({ data, clickHandler }) => {
  return (
    <>
      <Flex wrap="wrap" justifyContent="center">
        {data &&
          data.map((item, index) => (
            <RecipeItemCard
              key={index}
              item={item}
              onClick={() => clickHandler(index)}
            />
          ))}
      </Flex>
    </>
  );
};

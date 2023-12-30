import { Box, Flex, Text } from "@chakra-ui/react";

export const RecipeItemCard = ({ item, onClick }) => {
  return (
    <Box
      width={["200px", "300px"]}
      height={["300px", "500px"]}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      border="2px solid #E2E8F0"
      gap={2}
      margin={4}
      marginTop={4}
      cursor="pointer"
      _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
      onClick={onClick}
    >
      <Box
        bgImage={`url(${item.recipe.image})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="34%"
        width="100%"
      />

      <Box
        p="4"
        height="100%"
        backgroundColor="#F8F6F4"
        fontSize={["xs", "sm", "md"]}
      >
        <Box
          m={["-2", "-1"]}
          fontWeight="hairline"
          lineHeight="tight"
          textAlign="center"
          color="rgba(0, 0, 0, 0.7)"
          fontSize={["xs", "sm", "md"]}
        >
          {item.recipe.mealType}
        </Box>
        <Box
          m={["0.5", "2"]}
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          textAlign="center"
          fontSize={["md", "lg", "xl"]}
        >
          {item.recipe.label}
        </Box>
        <Flex justifyContent="center" whiteSpace="pre">
          {item.recipe.healthLabels.includes("Vegetarian") && (
            <Box
              m={["0.5", "2"]}
              fontWeight="normal"
              lineHeight="tight"
              textAlign="center"
            >
              {`Vegetarian `}
            </Box>
          )}

          {item.recipe.healthLabels.includes("Vegan") && (
            <Box m={["0.5", "2"]} fontWeight="normal" lineHeight="tight">
              Vegan
            </Box>
          )}
        </Flex>

        {item.recipe.dietLabels.length > 0 && (
          <Box m={["0.5", "2"]} fontWeight="normal" lineHeight="tight">
            <Box textAlign="center" fontWeight="semibold">
              {`Diet: `}
            </Box>
            <Flex justifyContent="center">
              {item.recipe.dietLabels.map((label, index) => (
                <Box key={index}>
                  <Text whiteSpace="pre" as="span">
                    {` ${label},`}{" "}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        )}
        <Box
          m={["0.5", "2"]}
          fontWeight="normal"
          lineHeight="tight"
          textAlign="center"
          whiteSpace="pre"
        >
          <Text fontWeight="semibold" as="span">
            Dish:
          </Text>
          <Text as="span">{` ${item.recipe.dishType}`}</Text>
        </Box>
        <Box
          m={["0.5", "2"]}
          fontWeight="semibold"
          lineHeight="tight"
          textAlign="center"
          whiteSpace="pre"
        >
          {item.recipe.cautions.length > 0 && (
            <>
              <Text>{`cautions:`}</Text>
              <Box m={["0.5", "2"]} fontWeight="normal">
                {item.recipe.cautions.map((caution, index) => (
                  <Box key={index} textAlign="space-around">
                    {caution}
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

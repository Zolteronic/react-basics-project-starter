import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button, Grid, Text } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, onClick }) => {
  return (
    <>
      <Flex wrap="wrap" justifyContent="center">
        <Box
          backgroundColor="#E2E8F0"
          width={["400px", "1100px"]}
          height={"100vh"}
          overflow="auto"
        >
          <Button
            leftIcon={<ArrowLeftIcon />}
            size={["md", "lg"]}
            borderRadius="0"
            width="70px"
            height="70px"
            onClick={onClick}
          ></Button>
          {/* inhoud box foto, naam, healthlabels, servings, summary, ingredients,**************************************************************************************************************/}
          <Box
            bgImage={`url(${recipe?.recipe?.image})`}
            bgSize="cover"
            bgRepeat="no-repeat"
            height="34%"
            width="100%"
            bgPosition={"center 60%"}
          ></Box>
          <Grid
            h="auto"
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            gap={4}
          >
            <Box mt={4} pl={6}>
              <Text
                fontSize={["sm", "md"]}
                fontWeight="semibold"
                color="rgba(0, 0, 0, 0.6)"
                textAlign="left"
              >
                {recipe.recipe.mealType}
              </Text>
              <Text fontWeight="bold" fontSize="2xl" textAlign="left">
                {recipe.recipe.label}
              </Text>
              <Box display="flex" flexDirection="row" mt={4} gap={4}>
                <Box fontSize={["sm", "md"]}>{`Total cooking time:   `}</Box>
                <Box fontSize={["sm", "md"]} fontWeight="semibold">
                  {recipe.recipe.totalTime} min
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap={4}>
                <Box fontSize={["sm", "md"]}>{`Servings:   `}</Box>
                <Box fontSize={["sm", "md"]} fontWeight="semibold">
                  {recipe.recipe.yield}
                </Box>
              </Box>
              <Box fontSize="lg" fontWeight="semibold" mt={4}>
                Ingredients:
              </Box>
              <Box
                fontSize={["sm", "md"]}
                display="flex"
                flexDirection="column"
              >
                {recipe.recipe.ingredientLines.map((line, index) => (
                  <Text mt={3} key={index}>
                    {line.replace(/\*/g, "")}
                  </Text>
                ))}
              </Box>
            </Box>

            <Text
              textAlign="left"
              fontSize={["md", "lg"]}
              justifyContent="space-between"
              mt={5}
              as="div"
              pl={[6, 0]}
            >
              <Text
                fontSize={["md", "lg"]}
                fontWeight="semibold"
              >{`healthLabels:`}</Text>
              <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                {recipe.recipe.healthLabels.map((label) => (
                  <Box key={label}>
                    <span style={{ backgroundColor: "pink" }}>{label}</span>
                  </Box>
                ))}
              </Box>
              {recipe.recipe.dietLabels.length > 0 && (
                <>
                  <Box
                    fontSize={["md", "lg"]}
                    fontWeight="semibold"
                    pt={4}
                  >{`Diet:`}</Box>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(2, 1fr)"
                    gap={2}
                    textSize={["sm", "md"]}
                  >
                    {recipe.recipe.dietLabels.map((label) => (
                      <Box key={label}>
                        <span style={{ backgroundColor: "lightgreen" }}>
                          {label}
                        </span>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
              {recipe.recipe.cautions.length > 0 && (
                <>
                  <Box fontSize={["md", "lg"]} fontWeight="semibold" pt={4}>
                    {"Cautions:"}
                  </Box>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(2, 1fr)"
                    gap={2}
                    textsize={["sm", "md"]}
                  >
                    {recipe.recipe.cautions.map((label) => (
                      <Box key={label}>
                        <span style={{ backgroundColor: "#ff5050" }}>
                          {label}
                        </span>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
              <Box
                fontSize={["md", "lg"]}
                fontWeight="semibold"
                pt={4}
              >{`Total nutrients:`}</Box>
              <Box
                textsize={["sm", "md"]}
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gap={2}
              >
                <Box display="flex" flexDirection="column">
                  {recipe.recipe.calories.toFixed(0)}
                  <Text>calories</Text>
                </Box>
                <Box display="flex" flexDirection="column">
                  {`${recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(
                    0
                  )} g`}
                  <Text>carbs</Text>
                </Box>
                <Box display="flex" flexDirection="column">
                  {`${recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(
                    0
                  )} g`}
                  <Text>proteins</Text>
                </Box>
              </Box>

              <Box
                fontSize={["md", "lg"]}
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                pt={4}
                gap={1}
              >
                <Box>
                  {`${recipe.recipe.totalNutrients.FAT.quantity.toFixed(0)} g`}
                  <Text>fat</Text>
                </Box>
                <Box display="flex" flexDirection="column">
                  {recipe.recipe.totalNutrients.CHOLE.quantity.toFixed(0)} mg
                  <Text>cholesterol</Text>
                </Box>
                <Box display="flex" flexDirection="column">
                  {recipe.recipe.totalNutrients.NA.quantity.toFixed(0)} mg
                  <Text>sodium</Text>
                </Box>
              </Box>
            </Text>
          </Grid>
          <Grid templateColumns="1fr" gap={4} borderTop="2px solid #C4DFDF">
            <Text
              fontSize={["md", "lg"]}
              fontWeight="semibold"
              display="flex"
              justifyContent="center"
              p={4}
            >
              thanks for reading. enjoy your meal!
            </Text>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, updateCartItems } from "../store/slices/cartState";

export default function CartCard(props) {
  const { movie } = props;
  const allMovies = useSelector((state) => state.cartState.data);
  const dispatch = useDispatch();

  const removeMovie = () => {
    let copyList = [...allMovies.items];
    const index = copyList.findIndex((item) => item.id === movie.id);
    copyList.splice(index, 1);
    dispatch(updateCartItems([...copyList]));
  };

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {movie.movieTitle}
          </Heading>
          <Text
            textAlign={"left"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
            fontSize={"sm"}
          >
            {movie.movieDescription}
          </Text>
          <Stack align={"left"} justify={"left"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              {movie.movieGenre}
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              colorScheme="red"
              variant="outline"
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={removeMovie}
            >
              Remover do carrinho
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}

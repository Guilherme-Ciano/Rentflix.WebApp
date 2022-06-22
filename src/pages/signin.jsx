import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Navbar from "../components/navbar";
import { useSelector } from "react-redux/es/exports";
import GlobalHandlers from "../services/handlers";
import API_Controller from "../services/api";

export default function Signin() {
  const userState = useSelector((state) => state.userState.data);

  const { handleUpdateUser } = GlobalHandlers();
  const { executeSignIn } = API_Controller();

  return (
    <Navbar>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
        backgroundImage={
          "url(https://www.teahub.io/photos/full/220-2205714_get-the-latest-movies-data-src-kodi-tv.jpg)"
        }
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"white"}>
              Entre na sua conta
            </Heading>
            <Text fontSize={"lg"} color={"white"}>
              E escolha o filme perfeito para o momento!
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("gray.900", "blue.700")}
            boxShadow={"lg"}
            p={8}
            color={"white"}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" onBlur={handleUpdateUser} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" name="senha" onBlur={handleUpdateUser} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Manter-me conectado</Checkbox>
                  <Link
                    color={"#F4AC45"}
                    onClick={() => (window.location.href = "/forgot-password")}
                  >
                    Esqueceu a senha?
                  </Link>
                </Stack>
                <Button
                  bg={"#F4AC45"}
                  color={"white"}
                  _hover={{
                    bg: "#F4AC40",
                  }}
                  onClick={executeSignIn(userState)}
                >
                  Entrar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Navbar>
  );
}

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Navbar from "../components/navbar";
import { useSelector } from "react-redux";
import GlobalHandlers from "../services/handlers";
import API_Controller from "../services/api";

export default function Signup() {
  const userState = useSelector((state) => state.userState.data);
  const userStateMessages = useSelector((state) => state.userState.messages);
  const [showPassword, setShowPassword] = useState(false);

  const { handleMaskCPF, handleUpdateUser, handleValidations, handleMaskDate } =
    GlobalHandlers();
  const { executeSignUp } = API_Controller();

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
            <Heading fontSize={"4xl"} textAlign={"center"} color={"white"}>
              Cadastre-se
            </Heading>
            <Text fontSize={"lg"} color={"white"}>
              E aproveite nosso incrível catálogo ✌️
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
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input
                      type="text"
                      name="nome"
                      onChange={handleUpdateUser}
                      value={userState.nome}
                      isInvalid={userStateMessages.nome}
                      placeholder={userStateMessages.nome}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Sobrenome</FormLabel>
                    <Input
                      type="text"
                      name="sobrenome"
                      onChange={handleUpdateUser}
                      value={userState.sobrenome}
                      isInvalid={userStateMessages.sobrenome}
                      placeholder={userStateMessages.sobrenome}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="CPF" isRequired>
                <FormLabel>CPF</FormLabel>
                <Input
                  type="text"
                  name="cpf"
                  maxLength={11}
                  onChange={handleUpdateUser}
                  onBlur={handleMaskCPF}
                  value={userState.cpf}
                  isInvalid={userStateMessages.cpf}
                  placeholder={userStateMessages.cpf}
                />
              </FormControl>
              <FormControl id="dataNascimento" isRequired>
                <FormLabel>Data de nascimento</FormLabel>
                <Input
                  type="text"
                  name="dataNascimento"
                  maxLength={11}
                  onChange={handleUpdateUser}
                  onBlur={handleMaskDate}
                  value={userState.dataNascimento}
                  isInvalid={userStateMessages.dataNascimento}
                  placeholder={userStateMessages.dataNascimento}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={userState.email}
                  onChange={handleUpdateUser}
                  isInvalid={userStateMessages.email}
                  placeholder={userStateMessages.email}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input
                    name="senha"
                    type={showPassword ? "text" : "password"}
                    onChange={handleUpdateUser}
                    value={userState.senha}
                    isInvalid={userStateMessages.senha}
                    placeholder={userStateMessages.senha}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#F4AC45"}
                  color={"white"}
                  _hover={{
                    bg: "#F4AC40",
                  }}
                  onClick={() => {
                    console.log("clicked", handleValidations());
                    // handleValidations() ? executeSignUp(userState) : () => {};
                  }}
                >
                  Cadastrar-se
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Já possui conta?{" "}
                  <Link
                    color={"#F4AC45"}
                    onClick={() => (window.location.href = "/sign-in")}
                  >
                    Clique aqui para logar
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Navbar>
  );
}

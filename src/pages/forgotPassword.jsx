import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Blob from "../assets/blob.svg";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"100%"}
        maxH={"100vh"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        backgroundImage={Blob}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            color={"white"}
          >
            Não deixe a diversão parar!{" "}
            <Text
              as={"span"}
              bgGradient="linear(to-r, blue.400,pink.400)"
              bgClip="text"
            >
              Vamos por um sorriso no seu rosto,
            </Text>{" "}
            recuperando seu login
          </Heading>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              <Text
                as={"span"}
                bgGradient="linear(to-r, blue.400,pink.400)"
                bgClip="text"
              >
                Recuperação de senha
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
              Digite seu endereço de email cadastrado, e seu nome. Assim,
              poderemos saber que é você e trocar sua senha antiga por uma que
              você desejar
            </Text>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Nome"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Email cadastrado"
                bg={"gray.100"}
                border={0}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <InputGroup>
                <Input
                  placeholder="Nova Senha"
                  type={showPassword ? "text" : "password"}
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
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
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, blue.400,pink.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, blue.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Trocar senha
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}

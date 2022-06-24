import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import "../styles/moviepage.scss";

export default function MoviePage() {
  const [imagePath, setImagePath] = React.useState("");

  return (
    <section className="moviePageWrapper">
      <div className="movieImage">
        <img src={imagePath} alt="Imagem não adicionada" />
      </div>

      <div className="movieInfo">
        <Box
          rounded={"lg"}
          bg={useColorModeValue("gray.900", "blue.700")}
          boxShadow={"lg"}
          p={8}
          color={"white"}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="name" isRequired>
                <FormLabel>Nome do Filme</FormLabel>
                <Input
                  type="text"
                  name="nome"
                  onChange={() => {}}
                  value={""}
                  isInvalid={false}
                  placeholder={"Nome do Filme"}
                />
              </FormControl>
              <FormControl id="genero" isRequired>
                <FormLabel>Gênero</FormLabel>
                <Select
                  placeholder="Selecione um Gênero"
                  backgroundColor={"gray.900"}
                >
                  <option value="Terror">Terror</option>
                  <option value="Ação">Ação</option>
                  <option value="Aventura">Aventura</option>
                  <option value="Comédia">Comédia</option>
                  <option value="Drama">Drama</option>
                  <option value="Ficção Científica">Ficção Científica</option>
                  <option value="Fantasia">Fantasia</option>
                  <option value="Romance">Romance</option>
                  <option value="Suspense">Suspense</option>
                </Select>
              </FormControl>
            </HStack>
            <FormControl id="Poster" isRequired>
              <FormLabel>Poster</FormLabel>
              <Input
                type="text"
                name="nome"
                onChange={(e) => {
                  setImagePath(e.target.value);
                }}
                value={""}
                isInvalid={false}
                placeholder={"http://www.example.com/image.jpg"}
              />
            </FormControl>
            <FormControl id="sinopse" isRequired>
              <FormLabel>Sinopse</FormLabel>
              <Textarea placeholder="Lorem ipsum dolor color sit amet" />
            </FormControl>
            <FormControl id="classificação" isRequired>
              <FormLabel>Classificação Indicativa</FormLabel>
              <InputGroup>
                <InputLeftAddon backgroundColor={"gray.900"} children="+" />
                <Input type="number" placeholder="18" />
              </InputGroup>
            </FormControl>
            <FormControl id="lancamento" isRequired>
              <FormLabel>É um lançamento?</FormLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="orange" value="1">
                    Sim
                  </Radio>
                  <Radio colorScheme="orange" value="0">
                    Não
                  </Radio>
                </Stack>
              </RadioGroup>
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
                onClick={() => {}}
              >
                Cadastrar Filme
              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </section>
  );
}

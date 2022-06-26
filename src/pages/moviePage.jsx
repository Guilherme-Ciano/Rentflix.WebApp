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
import GlobalHandlers from "../services/handlers";
import { useSelector } from "react-redux";

import "../styles/moviepage.scss";
import API_Controller from "../services/api";
import GoBackButton from "../components/goBackBnt";

export default function MoviePage() {
  const movieState = useSelector((state) => state.movieState.data);
  const movieStateMessages = useSelector((state) => state.movieState.messages);

  const [imagePath, setImagePath] = React.useState("");
  const { handleUpdateMovie } = GlobalHandlers();
  const { executeCreateMovie } = API_Controller();

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
          <GoBackButton />
          <Stack spacing={4}>
            <HStack>
              <FormControl id="name" isRequired>
                <FormLabel>Nome do Filme</FormLabel>
                <Input
                  type="text"
                  name="Titulo"
                  onChange={handleUpdateMovie}
                  value={movieState.Titulo}
                  isInvalid={false}
                  placeholder={"Nome do Filme"}
                />
              </FormControl>
              <FormControl id="genero" isRequired>
                <FormLabel>Gênero</FormLabel>
                <Select
                  placeholder="Selecione um Gênero"
                  backgroundColor={"gray.900"}
                  name="Genero"
                  onChange={handleUpdateMovie}
                  value={movieState.Genero}
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
                name="Poster"
                onChange={(e) => {
                  setImagePath(e.target.value);
                  handleUpdateMovie(e);
                }}
                value={movieState.Poster}
                isInvalid={false}
                placeholder={"http://www.example.com/image.jpg"}
              />
            </FormControl>
            <FormControl id="sinopse" isRequired>
              <FormLabel>Sinopse</FormLabel>
              <Textarea
                name="Sinopse"
                placeholder="Lorem ipsum dolor color sit amet"
                onChange={handleUpdateMovie}
                value={movieState.Sinopse}
              />
            </FormControl>
            <FormControl id="classificação" isRequired>
              <FormLabel>Classificação Indicativa</FormLabel>
              <InputGroup>
                <InputLeftAddon backgroundColor={"gray.900"} children="+" />
                <Input
                  type="number"
                  placeholder="18"
                  name="ClassificacaoIndicativa"
                  onChange={handleUpdateMovie}
                  value={movieState.ClassificacaoIndicativa}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="lancamento" isRequired>
              <FormLabel>É um lançamento?</FormLabel>
              <RadioGroup defaultValue="2" value={movieState.Lancamento}>
                <Stack spacing={5} direction="row">
                  <Radio
                    colorScheme="orange"
                    value="1"
                    onChange={handleUpdateMovie}
                    name="Lancamento"
                  >
                    Sim
                  </Radio>
                  <Radio
                    colorScheme="orange"
                    value="0"
                    name="Lancamento"
                    onChange={handleUpdateMovie}
                  >
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
                onClick={() => executeCreateMovie(movieState)}
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

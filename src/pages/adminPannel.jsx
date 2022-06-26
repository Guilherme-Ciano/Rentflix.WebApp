import React, { useEffect } from "react";
import {
  Box,
  chakra,
  SimpleGrid,
  Button,
  Stack,
  useColorModeValue,
  Badge,
  Center,
  Flex,
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";

import StatsCard from "../components/statsCard";
import API_Controller from "../services/api";
import { useSelector } from "react-redux";
import Navbar from "../components/navbar";
import GoBackButton from "../components/goBackBnt";

export default function AdminPannel() {
  const { executeGetAll, executeDeleteUser } = API_Controller();
  const users = useSelector((state) => state.userState.data);
  const movies = useSelector((state) => state.movieState.data);
  const locacoes = useSelector((state) => state.locacoesState.data);

  useEffect(() => {
    executeGetAll();
  }, []);

  const getUserIdAndSearchForMovies = (userId) => {
    let filmesLocados = [];

    locacoes.items.map((locacao) => {
      if (parseInt(locacao.id_Cliente) === userId) {
        filmesLocados.push(locacao);
      }
    });

    return filmesLocados;
  };

  const getMoviesById = (moviesIds) => {
    let filmes = [];

    movies.items.map((movie) => {
      moviesIds.map((movieId) => {
        if (movie.id === movieId.id_Filme) {
          filmes.push({
            ...movie,
            dataLocacao: movieId.dataLocacao,
            dataDevolucao: movieId.dataDevolucao,
          });
        }
      });
    });

    return filmes;
  };

  const iconOfRent = (dataLocacao, dataDevolucao) => {
    if (new Date().getDate() < parseInt(dataDevolucao.split("/")[0])) {
      return <BiTimeFive />;
    } else {
      return <FaRegTimesCircle />;
    }
  };

  const colorOfRent = (dataLocacao, dataDevolucao) => {
    if (new Date().getDate() < parseInt(dataDevolucao.split("/")[0])) {
      return "green.500";
    } else {
      return "red.500";
    }
  };

  return (
    <Box>
      <GoBackButton />
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}
        >
          Status Rentflix
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Usuários"}
            stat={`${users.items.length} Cadastrados`}
          />
          <StatsCard
            title={"Locações"}
            stat={`${locacoes.items.length} Realizadas`}
          />
          <StatsCard
            title={"Filmes"}
            stat={`${movies.items.length} Catalogados`}
          />
        </SimpleGrid>
      </Box>

      {users.items.map((user) => {
        const locacoesDoUser = getUserIdAndSearchForMovies(user.id);
        const filmesLocados = getMoviesById(locacoesDoUser);

        return (
          <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <Center py={6}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "100%" }}
                height={{ sm: "auto", md: "auto" }}
                direction={{ base: "column", md: "column" }}
                bg={"white"}
                boxShadow={"2xl"}
                py={"5"}
                shadow={"xl"}
                border={"1px solid"}
                borderColor={"gray.800"}
                rounded={"lg"}
                padding={4}
              >
                <Heading flex={0.1} fontSize="lg" fontWeight="bold">
                  Usuário: {user.nome}
                </Heading>

                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="left"
                  alignItems="left"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize="lg" fontWeight="bold">
                    Filmes alugados
                  </Heading>
                  <List spacing={3}>
                    {filmesLocados.map((filme) => {
                      return (
                        <ListItem
                          display={"flex"}
                          flexDirection={"row"}
                          alignItems={"center"}
                        >
                          <ListIcon
                            icon={iconOfRent(
                              new Date(filme.dataLocacao).toLocaleDateString(
                                "pt-BR"
                              ),
                              new Date(filme.dataDevolucao).toLocaleDateString(
                                "pt-BR"
                              )
                            )}
                            color={colorOfRent(
                              new Date(filme.dataLocacao).toLocaleDateString(
                                "pt-BR"
                              ),
                              new Date(filme.dataDevolucao).toLocaleDateString(
                                "pt-BR"
                              )
                            )}
                          />
                          <Stack
                            spacing={1}
                            display={"flex"}
                            flexDirection={"row"}
                            width={"100%"}
                            alignItems={"center"}
                            gap={10}
                          >
                            <Heading
                              fontSize="lg"
                              fontWeight="bold"
                              width={"40%"}
                            >
                              {filme.titulo}
                            </Heading>

                            <Text fontSize="sm" width={"40%"}>
                              {filme.genero}
                            </Text>
                            <Text fontSize="sm">
                              {new Date(filme.dataLocacao).toLocaleDateString(
                                "pt-BR"
                              )}{" "}
                              |{" "}
                              {new Date(filme.dataDevolucao).toLocaleDateString(
                                "pt-BR"
                              )}
                            </Text>
                          </Stack>
                        </ListItem>
                      );
                    })}
                  </List>

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
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"red.400"}
                      color={"white"}
                      _hover={{
                        bg: "red.500",
                      }}
                      _focus={{
                        bg: "red.500",
                      }}
                      onClick={() => executeDeleteUser(user.id)}
                    >
                      Deletar usuário
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Center>
          </Box>
        );
      })}
    </Box>
  );
}

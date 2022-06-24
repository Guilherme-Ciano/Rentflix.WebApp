import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";

export default function API_Controller() {
  const executeSignUp = (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(`${BACKEND_URL}/clientes`, {
          ...data,
          cpf: data.cpf.replace(/\D/g, ""),
          dataNascimento: data.dataNascimento.split("/").reverse().join("-"),
        })
        .then((response) => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", response.data);
          resolve(response);
          window.location.href = "/catalogue";
        })
        .catch((error) => {
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Validando informações...",
      success: "Usuário cadastrado com sucesso!",
      error: "Erro ao cadastrar usuário!",
    });
  };

  const executeSignIn = (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(`${BACKEND_URL}/cliente/login`, {
          email: "",
          senha: "",
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Validando informações...",
      success: "Usuário autenticado com sucesso!",
      error: "Erro ao autenticar usuário!",
    });
  };

  const executeRentCartMovie = (data) => {
    let arrayOfMovieIds = [];

    data.movies.forEach((movie) => {
      arrayOfMovieIds.push(movie.id);
    });

    const promise = new Promise((resolve, reject) => {
      axios
        .post(`${BACKEND_URL}/cliente/alugar`, {
          idFilmes: arrayOfMovieIds,
          idCliente: data.user.id,
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Validando informações...",
      success: "Filme(s) alugado(s) com sucesso!",
      error: "Erro ao alugar filme(s)!",
    });
  };

  return {
    executeSignUp,
    executeSignIn,
    executeRentCartMovie,
  };
}

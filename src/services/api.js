import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateMovieItems } from "../store/slices/moviesState";
import { updateUserStore } from "../store/slices/userState";

export default function API_Controller() {
  const dispatch = useDispatch();

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
        .post(`${BACKEND_URL}/clientes/login`, data)
        .then((response) => {
          if (response.status === 404) {
            reject("Usuário não encontrado!");
          } else {
            dispatch(updateUserStore(response.data));
            localStorage.setItem("user", JSON.stringify(response.data));
            resolve(response);
            window.location.href = "/catalogue";
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Validando informações...",
      success: "Usuário autenticado com sucesso!",
      error: "Email ou senha incorretos!",
    });
  };

  const executeCreateMovie = (data) => {
    console.log(data);
    const promise = new Promise((resolve, reject) => {
      axios
        .post(`${BACKEND_URL}/filmes`, {
          ...data,
          ClassificacaoIndicativa: parseInt(data.ClassificacaoIndicativa),
          Lancamento: parseInt(data.Lancamento),
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Validando informações...",
      success: "Filme cadastrado com sucesso!",
      error: "Erro ao cadastrar filme!",
    });
  };

  const executeGetMovies = () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(`${BACKEND_URL}/filmes`)
        .then((response) => {
          dispatch(updateMovieItems(response.data));
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Validando informações...",
      success: "Filmes recuperados com sucesso!",
      error: "Erro ao recuperar filmes!",
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
    executeCreateMovie,
    executeGetMovies,
  };
}

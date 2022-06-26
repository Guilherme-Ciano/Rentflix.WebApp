import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateMovieItems } from "../store/slices/moviesState";
import { updateUserStore } from "../store/slices/userState";
import { updateCartItems } from "../store/slices/cartState";
import { updateLocacoesItems } from "../store/slices/locacoesState";

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
          dispatch(updateUserStore(response.data));
          localStorage.setItem("token", JSON.stringify(response.token));
          localStorage.setItem("user", JSON.stringify(response.data));
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

  const executeGetUsers = () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(`${BACKEND_URL}/clientes`)
        .then((response) => {
          dispatch(
            updateUserStore({
              items: response.data,
            })
          );
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Carregando usuários...",
      success: "Usuários carregados com sucesso!",
      error: "Erro ao carregar usuários!",
    });
  };

  const executeDeleteUser = (id) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .delete(`${BACKEND_URL}/clientes/${id}`, {
          Id: id,
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
      pending: "Excluindo usuário...",
      success: "Usuário excluído com sucesso!",
      error: "Erro ao excluir usuário!",
    });
  };

  const executeGetLocacoes = () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get(`${BACKEND_URL}/locacoes`)
        .then((response) => {
          dispatch(updateLocacoesItems(response.data));
          resolve(response);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });

    toast.promise(promise, {
      pending: "Carregando locações...",
      success: "Locações carregadas com sucesso!",
      error: "Erro ao carregar locações!",
    });
  };

  const executeCreateMovie = (data) => {
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
    const user = JSON.parse(localStorage.getItem("user"));

    data.items.forEach((movie) => {
      const promise = new Promise((resolve, reject) => {
        axios
          .post(`${BACKEND_URL}/locacoes`, {
            Id_Cliente: user.id,
            Id_Filme: movie.id,
            DataLocacao: new Date().toISOString().split("T")[0],
            DataDevolucao:
              movie.lancamento === 1
                ? new Date(new Date().setDate(new Date().getDate() + 2))
                    .toISOString()
                    .split("T")[0]
                : new Date(new Date().setDate(new Date().getDate() + 3))
                    .toISOString()
                    .split("T")[0],
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
        success: "Filme alugado com sucesso!",
        error: "Erro ao alugar filme(s)!",
      });
    });

    dispatch(updateCartItems([]));
  };

  const executeGetAll = () => {
    executeGetLocacoes();
    executeGetUsers();
    executeGetMovies();
  };

  return {
    executeSignUp,
    executeSignIn,
    executeRentCartMovie,
    executeCreateMovie,
    executeGetMovies,
    executeGetUsers,
    executeGetLocacoes,
    executeGetAll,
    executeDeleteUser,
  };
}

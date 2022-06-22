import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";

export default function API_Controller() {
  const executeSignUp = (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(`${BACKEND_URL}/signup`, data)
        .then((response) => {
          resolve(response);
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

    return promise;
  };

  const executeSignIn = (data) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post(`${BACKEND_URL}/signin`, data)
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

    return promise;
  };

  return {
    executeSignUp,
    executeSignIn,
  };
}

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { updateCartItems } from "../store/slices/cartState";
import {
  clearUserMessages,
  updateUserStore,
  updateUserStoreMesages,
} from "../store/slices/userState";

export default function GlobalHandlers() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userState.data);
  const userStateMessages = useSelector((state) => state.userState.messages);

  const handleUpdateUser = (e) => {
    dispatch(
      updateUserStore({
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleMaskCPF = (e) => {
    const cpf = e.target.value;
    const maskedCPF = cpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    handleUpdateUser({ target: { name: "cpf", value: maskedCPF } });
  };

  const handleValidations = () => {
    Object.keys(userState).forEach((key) => {
      if (userState[key] === "") {
        dispatch(
          updateUserStoreMesages({
            [key]: "Campo é obrigatório",
          })
        );
      }
    });
  };

  const handleSubmitValidation = () => {
    if (Object.keys(userState).every((key) => userState[key] !== "")) {
      return true;
    }
  };

  const handleMaskDate = (e) => {
    const date = e.target.value;
    const maskedDate = date
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})(\d{4})/g, "$1/$2/$3");
    handleUpdateUser({ target: { name: "dataNascimento", value: maskedDate } });
  };

  const addMovieToCart = (movie) => {
    dispatch(updateCartItems(movie));
  };

  return {
    handleUpdateUser,
    handleMaskCPF,
    handleValidations,
    handleMaskDate,
    handleSubmitValidation,
    addMovieToCart,
  };
}

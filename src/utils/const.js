export const mainInitialState = {
  isLoading: true,
};

export const userInitialState = {
  data: {
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    cpf: "",
    dataNascimento: "",
  },
  messages: {},
};

export const cartInitialState = {
  data: {
    items: [],
    total: 0,
  },
  messages: {},
};

export const moviesInitialState = {
  data: {
    items: [],
  },
  messages: {},
};

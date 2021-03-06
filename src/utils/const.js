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
    items: [],
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
    Titulo: "",
    Genero: "",
    Sinopse: "",
    ClassificacaoIndicativa: 0,
    Lancamento: 0,
    items: [],
  },
  messages: {},
};

export const locacoesInitialState = {
  data: {
    items: [],
  },
  messages: {},
};

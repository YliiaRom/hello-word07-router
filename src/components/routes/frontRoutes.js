export default {
  pages: {
    home: "/",
    about: "/about",
    products: {
      index: "/products",
      add: "/products/new",
      edit: "/products/:id/edit",
      detail: "/products/:id",
    },
  },
  navigate: {
    products: {
      list: "/products",
      add: "/products/new",
      getDetailLink: (id) => `/products/${id}`,
      getEditLink: (id) => `/products/${id}/edit`,
    },
  },
};

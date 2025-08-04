const { default: axios } = require("axios");

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getCategory = () => axiosClient.get("/categories?populate=*");

const getSliders = () =>
  axiosClient.get("/sliders?populate=*").then((res) => res.data.data);

const getCategoryList = () =>
  axiosClient.get("/categories?populate=*").then((res) => res.data.data);

const getAllProducts = () =>
  axiosClient.get("/products?populate=*").then((res) => res.data.data);

const getProductsByCategory = (category) =>
  axiosClient
    .get("/products?filters[categories][name][$in]=" + category + "&populate=*")
    .then((res) => res.data.data);

const registerUser = (username, email, password) =>
  axiosClient.post("/auth/local/register", {
    username,
    email,
    password,
  });

export default {
  getCategory,
  getSliders,
  getCategoryList,
  getAllProducts,
  getProductsByCategory,
  registerUser,
};

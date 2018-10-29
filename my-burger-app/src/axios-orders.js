import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-e9e45.firebaseio.com/"
});

export default instance;

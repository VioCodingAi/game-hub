import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2ac56f09840e4d2ba8f1b842425ce58b",
  },
});

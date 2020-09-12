import axios from "axios";

export const API_URL = "https://portfolio-refactored-backend.herokuapp.com";

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: API_URL,
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  auth() {
    return {
      getCommentsCall: () => this.instance.get(`/api/v1/comments`),
      postCommentCall: (data) => this.instance.post(`/api/v1/comments`, data),
      deleteCommentCall: (data) =>
        this.instance.delete(`/api/v1/comments/${data}`),
    };
  }
}

export default Api;

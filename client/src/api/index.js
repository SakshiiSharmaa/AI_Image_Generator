import axios from "axios";

const isDev = window.location.hostname === "localhost";
const serverUrl = isDev? 'http://localhost:8080/api' : import.meta.env.SERVER_API_BASE_URL;
const API= axios.create({
    baseURL: serverUrl
})

export const GetPosts = async ()=> await API.get("/post/");
export const CreatePost = async (data)=> await API.post("/post/", data);
export const GenerateAIImage = async (data)=> await API.post("/generateImage/", data);
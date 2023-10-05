import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDdiNGNkMTg1MzgyZjg1N2U3MjQ3MiIsImlzYWRtaW4iOnRydWUsImlhdCI6MTY5NjQ5NzAzOSwiZXhwIjoxNjk2NTgzNDM5fQ.tJbjQZP1eIr7PyyJYdd6UtuvA2tg54F74yNrS09ZhP8";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});

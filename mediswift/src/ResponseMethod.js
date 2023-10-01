import axios from "axios";

const BASE_URL = "https://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDdiNGNkMTg1MzgyZjg1N2U3MjQ3MiIsImlzYWRtaW4iOnRydWUsImlhdCI6MTY5NjE0NTM2MywiZXhwIjoxNjk2MjMxNzYzfQ.vUxvbAupbswgI01VeV2GSlc96A9vEowyTTeNpWJKG-E";


export const publicRequest = axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header : {token:`Bearer ${TOKEN}`}
});

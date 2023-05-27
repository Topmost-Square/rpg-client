import {getToken} from "./auth";

export const call = async (route, method, data) => {
    const url = `${process.env.REACT_APP_URI}${route}`;

    console.log(url, 'URL')

    const token = getToken() || '';
    const headers = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
    };

    const body = JSON.stringify(data);

    const response = await fetch(url, { method, headers, body });

    return await response.json();
}

import jwtDecode from "jwt-decode";

export const saveToken = token => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');

export const isAuth = () => {
    const token = getToken();
    if (!token)
        return false;

    const decodedToken = jwtDecode(token);

    return decodedToken.exp > (new Date().getTime()) / 1000;
}
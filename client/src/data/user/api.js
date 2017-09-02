import axios from 'axios';

const ROOT_URL = 'localhost:5051'

export const LOGIN = 'LOGIN';
export const SAVE_FORM = 'SAVE_FORM';

export const login = ({ username, password }) => {
    const url = `${ROOT_URL}/login`;
    const request = axios.post(url, {
        username,
        password,
    });

    return {
        type: LOGIN,
        payload: request,
    }
};

export const register = ({ username, password, email }) => {
    const url = `${ROOT_URL}/user`;
    const request = axios.post(url, {
        username,
        password,
        email,
    });

    return {
        type: SAVE_FORM,
        payload: request,
    }
}

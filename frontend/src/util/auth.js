import {redirect} from "react-router-dom";

const TOKEN_KEY = 'EVENTS_APP_TOKEN';

export const getAuthToken = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
}

export const removeAuthToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}

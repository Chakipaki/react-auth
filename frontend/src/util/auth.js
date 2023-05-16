import {redirect} from "react-router-dom";

const TOKEN_KEY = 'EVENTS_APP_TOKEN';
const EXPIRATION_KEY = 'EVENTS_APP_EXPIRATION';

export const getTokenDuration = () => {
    const storedExpDate = localStorage.getItem(EXPIRATION_KEY);
    const expirationDate = new Date(storedExpDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export const getAuthToken = () => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
        return null;
    }

    const duration = getTokenDuration();

    if (duration <= 0) {
        return 'EXPIRED';
    }
    return token;
}

export const removeLSToken = (key) => {
    localStorage.removeItem(key)
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

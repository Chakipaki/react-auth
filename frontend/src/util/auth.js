const TOKEN_KEY = 'EVENTS_APP_TOKEN';

export const getAuthToken = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
}

export const removeAuthToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export const Storage = {
    storeToken(token) {
        localStorage.setItem('jwt_token', token);
    },
    retrieveToken() {
        return localStorage.getItem('jwt_token');
    },
    clearToken() {
        this.storeToken("");
    },
    hasValidToken() {
        return this.retrieveToken() !== "";
    }
}
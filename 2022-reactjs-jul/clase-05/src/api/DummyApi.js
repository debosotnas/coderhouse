export class DummyApi {
    static BASE_URL = 'https://dummyapi.io/data/v1/'; // EndPoint
    static GET_USERS = 'user?limit=10';
    static HEADERS = { 'app-id': '62e1a2cc275dc21b56032db4' };

    static getUsers() {

        return fetch(this.BASE_URL + this.GET_USERS, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...this.HEADERS
            }
        });

    }
}
export class DummyApi {
    static BASE_URL = 'https://dummyapi.io/data/v1/'; // EndPoint
    static GET_USERS = 'user?limit=10';
    static GET_USER_INFO = (id) => `user/${id}`;
    static HEADERS = { 'app-id': '62e1a2cc275dc21b56032db4' };

    static getUsers() { //getUsers retorna una Promise

        return fetch(this.BASE_URL + this.GET_USERS, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...this.HEADERS
            }
        });

    }

    static getUserInfo(id) {

        return fetch(this.BASE_URL + this.GET_USER_INFO(id), {
            method: 'GET',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                ...this.HEADERS
            }
        });

    }

}
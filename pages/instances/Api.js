import axios from 'axios';

let instance;

class AxiosClass {

    token = "";

    constructor() {
        if (!instance) {
            this.api = axios.create({
                baseURL: "https://namle.tranty9597.now.sh/api/"
            })
        }
        instance = this;

    }

    setToken = (token) => {
        this.token = token
    }

    get = (url) => {
        return this.api.get(url)
    }
    post = (url) => {
        return this.api.post(url)
    }

    getFriend = (uid) => {
        return this.api.get(`/getFriends?uid=${uid}&accessToken=${this.token}`)
    }
}

const api = new AxiosClass();

export { api }

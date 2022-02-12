import axios from "axios";

const baseURL = "https://fakestoreapi.com/products";

export default class ProductService {
    static fetchAll() {
        return axios.get(`${baseURL}`);
    }

    static fetch(productId) {
        return axios.get(`${baseURL}/${productId}`);
    }

    static fetchInCategory(category) {
        return axios.get(`${baseURL}/category/${category}`);
    }
}

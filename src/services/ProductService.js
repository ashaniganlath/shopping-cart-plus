const baseURL = 'https://fakestoreapi.com/products';

export default class ProductService {
    static fetchAll() {
        return axios.get(`${baseURL}`);
    }

    static fetch(productId) {
        return axios.get(`${baseURL}/${productId}`);
    }
}
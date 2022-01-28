const baseURL = 'https://fakestoreapi.com/products';

export default class ProductService {
    static async fetchAll() {
        await axios.get(`${baseURL}`)
            .then(response => response.data)
            .catch(error => console.log(error));
    }

    static async fetch(productId) {
        await axios.get(`${baseURL}/${productId}`)
            .then(response => response.data)
            .catch(error => console.log(error));
    }
}